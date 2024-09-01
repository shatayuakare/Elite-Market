import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 1
    },
    shop: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const Products = mongoose.model("products", productSchema)

export default Products