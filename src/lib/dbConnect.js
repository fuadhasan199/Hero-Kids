const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.Mongo_Uri 
const dbName=process.env.db_name 

const Collection={
      PRODUCTS:'products'
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}); 
export  const dbConnect=async (cname)=>{ 
    return  client.db(dbName).collection(cname)
      
}