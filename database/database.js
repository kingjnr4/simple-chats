import { PrismaClient } from "@prisma/client"

export const db = new PrismaClient()
export function connectToDB(){
    db.$connect()
    console.log("connected to db");
}
export function disconnectFromDb(){
    db.$disconnect()
    console.log("disconnected");
}

