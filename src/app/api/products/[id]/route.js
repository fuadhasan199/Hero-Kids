import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request,{ params }) {
  try {
   
    const { id } = await params; 

    
    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid ID format" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

     const db =await dbConnect()
    const productsCollection = db.collection('products'); 
    
   
    const product = await productsCollection.findOne({ _id: new ObjectId(id) }); 

   
    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), { 
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      ...product,
      _id: product._id.toString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } 
  catch (error) {
    
    console.error("CRITICAL BACKEND ERROR:", error.message);
    return new Response(JSON.stringify({ error: error.message || "Server Error" }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}