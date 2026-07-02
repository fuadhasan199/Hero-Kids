import Credentials from "next-auth/providers/credentials"
import { dbConnect } from "./dbConnect";
import bcrypt from "bcrypt"
export const authOptions = {
  
  providers: [
      Credentials({
    
    name: "Credentials",
 
    credentials: {
      email: { label: "Email", type: "email", placeholder: "example@mail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }
        const db=await dbConnect()
    const user = await db.collection('users').findOne({ email: credentials.email });
     if (!user) {
          throw new Error("No user found with this email");
        } 
        const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordMatch) {
          throw new Error("Incorrect password");
        }

       return{
        id: user._id.toString(),
          name: user.name,
          email: user.email,

       }
        
     
 
    }
  })
    
  ],
  session:{
    strategy:'jwt'
  },
  
     secret:process.env.NEXTAUTH_SECRET,
}