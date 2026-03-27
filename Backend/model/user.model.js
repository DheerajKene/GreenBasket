const { url } = require('inspector');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Avatar:{
        type:String,
        unique:true
    },
    FirstName:{
        type:String,
        required:true
    },

    LastName:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true,
        unique: true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }

}
//versionKey is true here by default 
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;