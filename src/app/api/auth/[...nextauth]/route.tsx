import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next";
import { env } from "@/lib/env";
import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
import { PrismaClient } from "@prisma/client";
import  EmailProvider from "next-auth/providers/email";
export const authOptions: NextAuthOptions = {

    adapter:PrismaAdapter(prisma as PrismaClient) as Adapter,
    
    providers:[
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID!,
            clientSecret: env.GOOGLE_CLIENT_SECRET!
        }),
     EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                }
              },
              from: process.env.EMAIL_FROM
            }),
     ],
    callbacks:{
        session({session,user}){
            session.user.id = user.id ;
            return session;
        },
    },
    events:{
        async signIn({user}){
            await mergeAnonymousCartIntoUserCart(user.id)
        },
    }
}

const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}