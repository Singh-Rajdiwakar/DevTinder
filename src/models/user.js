const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
        trim :true,
    }, 
    lastName:{
        type:String,
        trim :true,
        maxLength:30, 
        required:true,
        minLength:1,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim :true,
        lowercase:true,
        validate:(value)=> {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address"+value);
            }
        },

    },
    password:{
        type:String,
        required:true,
        minLength:6,
        select:false,
         validate:(value)=> {
            if(!validator.isStrongPassword(value)){
                throw new Error("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol." + value);
            }
        },
    },
    
    age:{
        type:Number,
        min:18,

    },
    gender:{
        type:String,
        enum :['male', 'female', 'other'],
        required:true,
    
    },
    phoneNumber:{
         required:true,
        type:String,
        trim :true,
       match: [/^[6-9]\d{9}$/, "Please fill a valid phone number"],
    },
    photourl:{
        type:String,
        trim :true,
         validate:(value) =>{
            if(!validator.isURL(value)){
                throw new Error("Invalid photo URL"+value);
            }
        },

        default : "data:image/png;base64,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",
    },
    about:{
        type:String,
        maxLength:500,
        trim :true,
    },
    skills:{
        type:[String],
        default:[],
        validate:{
            validator:v=>v.length<=20,
            message:"A maximum of 20 skills are allowed."
        }
    },
},
    {
        timestamps:true,
    }
    
);
module.exports = mongoose.model("User", userSchema);