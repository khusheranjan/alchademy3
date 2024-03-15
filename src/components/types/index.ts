import { z } from "zod";

export const SignUpSchema = z.object({
    username: z.string().min(2).max(50),
    password:z.string().min(8,{message:"Password must be 8 characters long"}),
    confirmPassword:z.string().min(8,{message:"Password must be 8 characters long"}),
  }).refine((data)=>data.password===data.confirmPassword,{
      message:"Password don't match",
      path:["confirmPassword"],
  
  })
  
