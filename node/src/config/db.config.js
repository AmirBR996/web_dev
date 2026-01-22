import mongoose from "mongoose"

export const connectDb = () =>{
    mongoose.connect(,{
        dbName : ,
        autoCreate : true
    }).then(()=>{
        console.log("Database connected.")
    })
    .catch((err) => {
        console.log("Database connection error")
        console.log(err)
    })
}