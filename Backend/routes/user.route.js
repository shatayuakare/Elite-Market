import express from "express"
import { createAccount, loginAccount, updateAccount } from "../controller/user.controller.js";
import Users from "../model/user.schema.js";

const userRoute = express.Router();


// userRoute.get("/", (req, res) => res.status(200).json({ message: "User Route" }))

userRoute.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users)
    } catch (error) {

    }

})
userRoute.post("/signup", createAccount)
userRoute.post("/login", loginAccount)
userRoute.post("/update", updateAccount)

export default userRoute