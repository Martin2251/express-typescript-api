import { PrismaClient } from "@prisma/client";

let dB :PrismaClient;

declare global {
    var __db: PrismaClient | undefined;
}