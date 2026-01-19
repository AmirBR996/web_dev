import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    first_name:{
        type : String,
        required : [true , "first name is required"]
    },
    last_name:{
        type : String,
        required : [true , "first name is required"] 
    },
    email:{
        type : String,
        required : [true , "last name is required"],
        unique : [true , "user already exists with provided email"]
    },
    password:{
        type : String,
        minLength : 6,
        required : [true , "Password is required"]
    }
},{timestamp:true})

// model
 const User = mongoose.model("User" , userSchema)

// register user
export const register = async (req , res) =>{
    try{
    const {first_name , last_name , email , password} = req.body
    if(!first_name){
        throw new Error("First_name is required");
    }
    if(!last_name){
        throw new Error("last_name is required");
    }
    if(!email){
        throw new Error("email is required");
    }
    if(!password){
        throw new Error("password is required");
    }
    const user = await User.create({first_name , last_name , email , password})
    res.status(201).json({
        message : "Account created"
     })
    }catch(error){
     res.status(500).json({
        message : error?.message || "something went wrong"
     })
}
}
// login
export const login = (req,res) =>{
    res.status(201).json({
        message : "Sucessfully login !"
    })
}


