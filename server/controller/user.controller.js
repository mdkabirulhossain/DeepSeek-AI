import { User } from "../model/user.model.js";
import bcrypt from 'bcryptjs';

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


export const login = (req, res) =>{
    console.log("login in function!!");
    res.end("login in function!!");
}

export const logout = (req, res) =>{
    console.log("logout function!!");
    res.end("logout function!!");
}