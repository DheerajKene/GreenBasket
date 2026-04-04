const express = require('express');
const UserModel = require("../model/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const Auth = require("../middleware/auth.middleware");
const dotenv = require("dotenv").config();
const bcrypt = require('bcrypt');
const saltrounds = 5;

userRouter.use(express.json());
// userRouter.use(Auth());


//Registering the user
userRouter.post("/register", async (req, res)=>{
    const {FirstName, LastName, Mobile, Password, ConfirmPassword} = req.body;
    console.log("Registration request body:", req.body);

    if (!FirstName || !LastName || !Mobile || !Password || !ConfirmPassword) {
        return res.status(400).json({ message: "Missing required registration credentials" });
    }

    if (Password !== ConfirmPassword) {
        return res.status(400).json({ message: "Password and ConfirmPassword must match" });
    }

    try {
        // Check if user already exists (only by mobile)
        const existingUser = await UserModel.findOne({ Mobile });
        if(existingUser){
            return res.status(400).json({message: "User with this mobile number already exists"});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, saltrounds);

        // Create new user
        const user = new UserModel({
            FirstName,
            LastName,
            Mobile,
            Password: hashedPassword,
            ConfirmPassword: hashedPassword
        });

        await user.save();
        console.log("User registered successfully:", user.FirstName, user.LastName);
        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            message: `Error registering user: ${error.message}`
        });
    }
});


//Login the user
userRouter.post("/login", async (req, res)=>{
    const {Mobile, Password} = req.body || {};

    if (!Mobile || !Password) {
        return res.status(400).json({ message: "Mobile and Password are required" });
    }

    try {
        const user = await UserModel.findOne({ Mobile });
        if(!user){
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if(isPasswordValid){
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            res.status(200).json({
                message: "User Login Successfully",
                token
            });
        } else {
            res.status(401).json({ message: "Wrong password" });
        }

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in user", error: error.message });
    }
});

// Get user profile
userRouter.get("/profile", Auth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            FirstName: user.FirstName,
            LastName: user.LastName,
            Mobile: user.Mobile
        });
    } catch (error) {
        console.error("Fetch profile error:", error);
        res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
});

module.exports = userRouter;
