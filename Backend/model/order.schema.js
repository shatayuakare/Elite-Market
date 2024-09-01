import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    address: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    status: {
        type: String,
        default: "Order Successfully"
    }
})

const Orders = mongoose.model("orders", orderSchema);
export default Orders