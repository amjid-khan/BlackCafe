import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//JWT secret Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //Checking is your already exists
        const existEmail = await userModel.findOne({ email });
        if (existEmail) {
            return res.json({ success: false, message: "User already exists" });
        }
        // validate email & strong Password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email",
            });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please choose a strong password",
            });
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while register user" });
    }
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User Doesn't  exist" });
        }
        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
            return res.json({ success: false, message: "Invalid credentials" });
        }
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log("Error while login user", error)
        res.json({ success: false, message: "Error" })
    }
};

export { loginUser, registerUser };
