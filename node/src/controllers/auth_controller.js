import  {hashPassword}  from "../utils/bcrypt.utils.js"
import { comparePassword } from "../utils/bcrypt.utils.js"
import User from "../models/user.model.js"
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
    const hashpass = await hashPassword(password)
    const user = await User.create({first_name , last_name , email , password:hashpass})
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
export const login = async(req,res) =>{
    try{
        const {email , password} = req.body;
        if(!email){
        throw new Error("email is required");
        }
        if(!password){
        throw new Error("password is required");
        }
        const user = await User.findOne({email:email})
        if(!user){
            throw new Error("Invalid email or password")
        }
        const is_pass_matched = await comparePassword(password , user.password)
        if(!is_pass_matched){
            throw new Error("Invalid email or password")
        }
        res.status(201).json({
            message : "Loggedin"
        });
    }catch(error){
     res.status(500).json({
        message : error?.message || "something went wrong"
     })
}
}

// api(application programming interface) / controller
