import { PrismaClient } from "./generated/prisma";


export const prismadb = global.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") {
    globalThis.prisma = prismadb;
}