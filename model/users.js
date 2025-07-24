import mongoose from "mongoose";

const roles = [
    "admin", "staff"
];

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    username: {type:String, required: true},
    password: {type:String, required: true},
    role: {type: String, enum: roles, required: true}
});

export default mongoose.model("Users", userSchema);