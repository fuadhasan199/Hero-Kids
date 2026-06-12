import { dbConnect } from "@/lib/dbConnect"


export async function GET() {
     try{ 

        const productsCollection=await dbConnect('products')
        const rawproducts=await productsCollection.find({}).toArray()
        const allproducts=rawproducts.map(product=>({
              ...product,
              _id:product._id.toString()
        }))
         return new Response(JSON.stringify(allproducts))
     } 
     catch(error){
          console.error("Database error:", error.message)
     }
}