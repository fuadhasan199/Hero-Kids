"use server"

import { dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcrypt"; 


export const postUser=async(payload)=>{
    const {email,password,mobile,name}=payload
    // check payload
     if(!email || !password) return null 
      
    //  check user exist or not 

    const db=await dbConnect()
    const isExist=await db.collection("users").findOne({email})
    if(isExist){
         return {error:"User already exist"}
    } 
    const hashPassword=await bcrypt.hash(password,10)
      

    // create user 
     const newUser={
          provider:"credentials",
          email,
          password:hashPassword,
          mobile,
          name,
          role:"user",
          
     } 



    //  insert user
 const user=await db.collection("users").insertOne(newUser) 
  if(user.acknowledged){
      return{
         ...user,
         insertId:user.insertId.tostring()
      }
  }







} 