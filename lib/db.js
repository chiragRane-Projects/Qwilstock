import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if(!URI){
   throw new Error("MongoDB URL not found");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if(!cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI)
        .then((mongoose) => {
            console.log("MongoDB connected")
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
        .finally(() => {
            console.log("Connection establishment attempted")
        })
    }

    cached.conn = await cached.promise;
    return cached.conn;
}