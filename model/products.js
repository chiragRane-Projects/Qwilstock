import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: {type: String},
    sku: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
    unit: {type: String, required: true},
    price: {type: Number, required: true}
})

export default mongoose.model("Products", productSchema);