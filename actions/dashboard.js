"use server";

import { prismadb } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server";

const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if(obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if(!userId) {
            throw new Error("User not authenticated");
        }

        const user = await prismadb.user.findUnique({
            where: { clerkUserId: userId },
        });
        if(!user) {
            throw new Error("User not found");
        }

        //* Convert balance to float before saving
        const balanceFloat = parseFloat(data.balance);
        if(isNaN(balanceFloat)) {
            throw new Error("Invalid balance value");
        }

        //* Check if account already exists
        const existingAccounts = await prismadb.account.findMany({
            where: { userId: user.id },
        });

        const defaultAccount = existingAccounts.length === 0 ? true : data.isDefault;

        //* if this account is set as default, unset all other accounts
        if(defaultAccount) {
            await prismadb.account.updateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false },
            });
        }

        //* Create the new account
        const account = await prismadb.account.create({
            data: {
                ...data,
                userId: user.id,
                name: data.name,
                balance: balanceFloat,
                isDefault: defaultAccount,
            },
        });


    } catch (err) {
        
    }
}