const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");
require("dotenv").config();

const Auth = (req, res, next)=>{
    const token = req.headers.Authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message:`token not found, please login again`
        });
    }else{
        try {
           if(token){
                jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
                if(err){
                    return res.status(400).json({message:`${err}`});
                }else if(decoded){
                    const userId = decoded.id;
                    const user = UserModel.findById(userId);
                    if(!user){
                        return res.status(401).json({
                            message:`User not found`
                        });
                    }
                    req.user = user;
                    next();
                }

                });
           }
        } catch (error) {
            res.status(500).json({
                message:`Error found: ${error}`
            })
        }
    }
}
