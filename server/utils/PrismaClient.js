import { PrismaClient } from "@prisma/client";
import { get } from "mongoose";

let prismaInstance = null;

function getPrismaInstance(){
    if(!prismaInstance){
        prismaInstance = new PrismaClient()
    }

    return prismaInstance
}

export default getPrismaInstance