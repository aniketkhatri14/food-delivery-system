import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aniketkhatri14:Aniket14@cluster0.lndqm.mongodb.net/food-del').then(()=>console.log("DB connected"));
}