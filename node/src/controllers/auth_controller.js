// register user
export const register = (req , res) =>{
     console.log(req.body);
     res.status(201).json({
        message : "Account created"
     })
}
// login
export const login = (req,res) =>{
    res.status(201).json({
        message : "Sucessfully login !"
    })
}


