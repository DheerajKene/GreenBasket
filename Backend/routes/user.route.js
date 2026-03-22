const express = require('express');
const UserModel = require("../model/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require('bcrypt');
const saltrounds = 5;

//Registering the user
userRouter.post("/register", async (req, res)=>{
    const {FirstName, LastName, Mobile, Password, ConfirmPassword} = req.body || {};
    console.log(req.body);

    if (!FirstName || !LastName || !Mobile || !Password || !ConfirmPassword) {
        return res.status(400).json({ message: "Missing required registration credentials" });
    }

    if (Password !== ConfirmPassword) {
        return res.status(400).json({ message: "Password and ConfirmPassword must match" });
    }
    const usr = await UserModel.findOne({Mobile, FirstName, LastName});
    if(usr){
        return res.status(500).json({message:`User has already registered`});
    }

    try {
        bcrypt.hash(Password, saltrounds , async function(err, hash) {

        if(err){
            return res.status(500).json({
                message:`Error hashing password: ${err.message}`
            })
        }else{
            const user = new UserModel({
                FirstName,
                LastName,
                Mobile,
                Password:hash,
                ConfirmPassword:hash
            });
            await user.save();
            res.status(201).json({
                message:"User registered seccessfully"
            })
        }});
        
    } catch (error) {
        res.status(500).json({
            message:`Error registering user: ${error.message}`
        });
    }
});


//Login the user
userRouter.post("/login", async (req, res)=>{
    const {Mobile, Password} = req.body;

    if (!Mobile || !Password) {
        return res.status(400).json({ message: "Mobile and Password are required" });
    }
    try {
        const user = await UserModel.findOne({ Mobile });
        if(!user){
            return res.status(401).json({
                message:"Invalid creadentials"
            });
        }else{
           bcrypt.compare(Password, user.Password, function(err, result) {
             if(result){
                const token = jwt.sign({ id:user._id}, process.env.SECRET_KEY);
                res.status(200).json({
                    message:"User Login Successfully",
                    token
                })
             }else{
                res.status(401).json({message:"wrong password"});
             }

            });
        }
    } catch (error) {
        res.status(401).json({message:"Error logging in user", error:error.message });
    }
});

module.exports = userRouter;
