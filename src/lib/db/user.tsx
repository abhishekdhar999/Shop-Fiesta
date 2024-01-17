// import { prisma } from "./prisma"
// import {cookies} from "next/dist/client/components/headers"
// import {Cart,Prisma } from "@prisma/client"
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { CartItem } from "@prisma/client";
// import { User } from "@prisma/client";


// interface createUserProps{
//     name:string 
//     email:string 
//     password:string 
//     mobile:string
// }
// export async function createUser({name,email,password,mobile}:createUserProps){
//     let newUser: User;

//     newUser = await prisma.user.create({
//         data:{
// name,
// email,
// password,
// mobile
//         }
//     })
// }