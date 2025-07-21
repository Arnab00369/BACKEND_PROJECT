//Method 2: (Professional approach) Do all codes in DB file and then import

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
   try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      // Log the connection instance to confirm successful connection
         console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance}`);
      
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit the process with failure
      
   }
}

export default connectDB
// Export the connectDB function to use it in other files