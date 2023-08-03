import mongoose from "mongoose";

export const connectToDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongodb connected successfully!');
        })
        connection.on('error',()=>{
            console.log('something went wrong cannot connected to mongodb');
        })


    }
    catch(error:any){
        throw new Error(error.message);
    }
}
