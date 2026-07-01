import Credentials from "next-auth/providers/credentials"

export const authOptions = {
  
  providers: [
      CredentialsProvider({
    
    name: 'Credentials',
 
    Credentials: {
      email: { label: "Email", type: "email", placeholder: "example@mail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
    
      const res = await fetch("/your/endpoint", {
        method: 'POST', 
        body: JSON.stringify(credentials), 
        headers: { "Content-Type": "application/json" } 
      }) 
      const user = await res.json()

      
      if (res.ok && user) {
        return user
      }
     
      return null
    }
  })
    
  ],
  
     secret:process.env.NEXTAUTH_SECRET,
}