import { User } from "../model/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import config from "../config.js";

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({ errors: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({ message: "User signup successful" });

    } catch (error) {
        console.error("Error in signup:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!user || !isPasswordCorrect) {
            return res.status(403).json({ errors: "Invalid Credentials" })
        }
        const token = jwt.sign(
            { id: user._id },
            config.JWT_SECRET,
            { expiresIn: config.JWT_EXPIRES_IN }
        );

        return res.status(200).json({
            message: "User Login Successfully",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                email: user.email,
            }
        });

    } catch (error) {
        console.log("Login fail", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

export const logout = (req, res) => {
    console.log("logout function!!");
    res.end("logout function!!");
}