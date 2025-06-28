import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sunnysuper2016:601027@cluster0.1a4tifa.mongodb.net/ZestyBite').then(()=>console.log("DB connected"));

}