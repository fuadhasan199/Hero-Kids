import { dbConnect } from "@/lib/dbConnect"


export async function GET(request) {
     try{ 
        
      const {searchParams}=new URL(request.url)
      const search=searchParams.get('search') || "" 
      
      const sort=searchParams.get('sort') || "" 

      let query={}

      if(search){
           query.$or=[
             {title:{$regex:search,$options:'i'}},
             {bangla:{$regex:search,$options:'i'}}
           ]
      }

     
     const productsCollection=await dbConnect('products') 
      
     let sortQuery={}
     if(sort==="low-to-high"){
            sortQuery.price=1
     } 
     else if(sort==="high-to-low"){
            sortQuery.price=-1
     }


        const rawproducts=await productsCollection.find(query).sort(sortQuery).toArray()
        const allproducts=rawproducts.map(product=>({
              ...product,
              _id:product._id.toString()
        }))
         return new Response(JSON.stringify(allproducts),{
            status:200,
            headers:{"Content-Type":"application/json"}
         })
     } 
     catch(error){
          console.error("Database error:", error.message)
     }
} 

