import mongoose from "mongoose";

const type = ["in", "out"]

const logSchema = new mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref:"Products", required: true},
    type: {type:String, enum: type, required: true},
    quantity: {type: Number, required: true},
    previousQty: {type: Number, required: true},
    updatedQty: {type: Number, required: true},
    reason: {type: String},
    performedBy: {type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true}
});

export default mongoose.model("Stock_Logs", logSchema);