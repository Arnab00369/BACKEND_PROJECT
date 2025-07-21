//Traditional Approach with inconsistent code
// require("dotenv").config({path: './env'}); 
// // Importing dotenv to use environment variables

//Professional Approach
// require('dotenv').config({
//    path:'./env'
// })
import dotenv from 'dotenv';


import connectDB from "./db";

dotenv.config({
   path: './env'
})


connectDB()


import mongoose from "mongoose";

// Importing constants such as DB_NAME or the name of the Platform
import { DB_NAME } from "./constants";

// import mongoose from "mongoose";

// Importing constants such as DB_NAME or the name of the Platform
// import { DB_NAME } from "./constants";
// import connectDB from "./db";


//1st method: But, still not the professional way to connect to MongoDB
/*
import express from 'express';
const app = express();
//Using IIFE JS Function --> using 'async'
//Professional way --> semi-colon at the first not end

//ALWAYS associate await with async function
//This is a self-invoking function that connects to MongoDB using the URI from environment

;( async () => {
   try{
      await mongoose.connect(`${process.env.MONGODB_URI}`)
      //App Listening on error
      app.on("error",(error)=>{
         console.log("ERROR!!", error);
         throw error; // Re-throw the error to handle it later
      })

      //App Listening on success
      app.listen(process.env.PORT, () => {
         console.log(`Server is running on port ${process.env.PORT}`);
      });

   }catch(error){
      console.error("Error connecting to MongoDB:", error);
      throw error; // Re-throw the error to handle it later
   }
})()*/



// => Traditional way to connect to MongoDB
// import mongoose from "mongoose"; 
// function connectDB(){}
// connectDB();