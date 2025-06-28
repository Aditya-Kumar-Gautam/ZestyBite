import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('db_URL').then(()=>console.log("DB connected"));

}