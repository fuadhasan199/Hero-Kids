import { authOptions } from "@/lib/authOption"
import NextAuth from "next-auth"




const Handler = NextAuth(authOptions) 

export {Handler as GET,Handler as POST}