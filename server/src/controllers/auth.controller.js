import User from "../models/user.model.js";
import { hashPassword,comparePassword } from "../utils/bcrypt.utils.js";
import { generateToken } from "../utils/jwt.utils.js";

// ! register user
export const register = async (req, res,next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name) {
      next({
        message:"first_name is required",
        status:400
      })
    }
    if (!last_name) {
      // throw new Error();
      next({
        message:"last_name is required",
        status:400
      })
    }
    if (!email) {
      // throw new Error();
      next({
        message:"email is required",
        status:400
      })
    }
    if (!password) {
      // throw new Error();
      next({
        message:"password is required",
        status:400
      })
    }

    const hashPass = await hashPassword(password);

    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashPass,
    });

    // console.log(data)

    res.status(201).json({
      message: "Account created",
      data: user,
    });
  } catch (error) {
   next(error)
  }
};

//! login
export const login = async (req, res,next) => {
  try {
    console.log("login",req.user)
    const { email, password } = req.body;
    if (!email) {
      throw new Error("email is required");
    }
    if (!password) {
      throw new Error("password is required");
    }
    const user = await User.findOne({email:email})

    if(!user){
        throw new Error('Invalid email or password')
    }

    const is_pass_matched = await comparePassword(password,user.password)

    if(!is_pass_matched){
        throw new Error('Invalid email or password')
    }

    const access_token = generateToken({
      id:user._id,
      email:user.email,
      first_name : user.first_name,
      last_name: user.last_name
    })

    res.status(201).json({
      message: "Login success",
      data:user,
      access_token:access_token
    });
  } catch (error) {
    next(error)
  }
};


// get user detail
export const getUserDetail = async(req,res,next)=>{
  try {
    const id = req.user.id
    const user = await User.findOne({_id:id})

    res.status(200).json({
      message:'Profile fetched',
      data:user
    })
    
  } catch (error) {
    next(error)
  }

}