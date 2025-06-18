import { currentUser } from "@clerk/nextjs/server"
import { prismadb } from "./prisma";

export const authUser = async () => {
    const user = await currentUser();
    if(!user) {
        return null;
    }
    try {
        const loggedInUser = await prismadb.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });
        if(loggedInUser) {
            return loggedInUser;
        }
        // If user does not exist in the database, create a new user
        const name = `${user.firstName} ${user.lastName}`.trim();
        const newUser = await prismadb.user.create({
            data: {
                clerkUserId: user.id,
                email: user.emailAddresses[0]?.emailAddress || '',
                name,
                imageUrl: user.imageUrl || '',
            },
        })
        return newUser;
    } catch (err) {
        console.error("Error fetching or creating user:", err);
    }
}