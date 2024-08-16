import express from "express"
import { createAccount, loginAccount, updateAccount } from "../controller/user.controller.js";

const userRoute = express.Router();


userRoute.get("/", (req, res) => res.status(200).json({ message: "User Route" }))

userRoute.post("/signup", createAccount)
userRoute.post("/login", loginAccount)
userRoute.post("/update", updateAccount)

export default userRoute