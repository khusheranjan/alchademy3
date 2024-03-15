"use server"

import { SignUpSchema } from "@/components/types"
import { z } from "zod"
import {Argon2id} from "oslo/password"
import { generateId } from "lucia"
import {prisma} from "@/lib/db/prisma"
import { lucia } from "@/lib/db/auth"
import { cookies } from "next/headers"

export const signUp = async (values:z.infer<typeof SignUpSchema>) =>{
    console.log(values)

    const hashedPassword = await new Argon2id().hash(values.password)

    const userId = generateId(15)


    try {
        const createdUser = await prisma.user.create({
          data: {
            id: userId,
            username: values.username,
            hashedPassword: hashedPassword
          },
        });
        
        const session = await lucia.createSession(userId,{
            expiresIn:60*60*24*30
        })
        
        const sessionCookie = lucia.createSessionCookie(session.id)

        cookies().set(sessionCookie.name,sessionCookie.value,sessionCookie.attributes)
        
        return {
          id: createdUser.id,
          username: createdUser.username
        };



        
      } catch (error) {
        console.error('Error creating user:', error);
        // Optionally, you can throw the error to let the caller handle it
        throw error;
      }
    


}