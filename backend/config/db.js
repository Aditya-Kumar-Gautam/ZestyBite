import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('DB_URL').then(()=>console.log("DB connected"));

}