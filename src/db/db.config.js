import mongoose from "mongoose";
const dbConnect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        
    }
}

export default dbConnect