import mongoose from "mongoose"

export const connectDb = () =>{
    mongoose.connect("mongodb://localhost:27017/",{
        dbName : "amir",
        autoCreate : true
    }).then(()=>{
        console.log("Database connected.")
    })
    .catch((err) => {
        console.log("Database connection error")
        console.log(err)
    })
}