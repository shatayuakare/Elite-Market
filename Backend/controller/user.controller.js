import Users from "../model/user.schema.js";
import bcrypt from "bcryptjs"

export const createAccount = async (req, res) => {
    const { name, email, phone, password } = req.body
    try {
        const user = await Users.findOne({ email })
        if (user) return res.status(200).json({ message: "User Already Exist" })

        const hash = await bcrypt.hash(password, 10);

        const createUser = new Users({ name, email, phone, password: hash });

        await createUser.save()
        res.status(201).json({
            message: "Account Created",
            name, email, phone
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const loginAccount = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!user || !isMatch) return res.status(404).json({ message: "Email or Password is incorrect0" })

        res.status(200).json({
            message: "Account logged In",
            name, email, phone
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const updateAccount = async (req, res) => {
    try {
        const { email, phone, name } = req.body;

        // if authentication check not available
        const user = await Users.findOne({ email });
        if (!user) return res.status(303).json({ message: "User not exist", email })

        await Users.findOneAndUpdate({ email }, { email, phone, name });

        res.status(200).json({ message: "Account Update", name, phone, email })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const changePassword = async (req, res) => {
    try {
        const { email, password } = req.body
        const newPassword = await bcrypt.hash(password, 10)
        await Users.findOneAndUpdate({ email }, { password: newPassword })
        res.status(200).json({
            message: "Password Updated",
            newPassword
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}