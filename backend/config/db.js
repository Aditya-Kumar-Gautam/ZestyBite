import mongoose from "mongoose";
import 'dotenv/config';

const dbURL = process.env.DB_URL;

export const connectDB = async ()=>{
    
    await mongoose.connect(dbURL).then(()=>console.log("DB connected"));

}