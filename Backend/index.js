import express from "express";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config()

app.use(express.json())
app.use(cors())


const port = process.env.PORT || 4001
const mongodb = process.env.MONGODB


app.listen(port, () => {
    console.log(`server working on ${port} port`)
    mongoose.connect(mongodb).then(() =>
        console.log("Database Connecting Successfully.")
    ).catch((err) => console.error("Error:", err.message))

})


app.get("/", (req, res) => {
    res.send("Hye Its working")
})


app.use("/products", productRoute)
app.use("/auth", userRoute)
