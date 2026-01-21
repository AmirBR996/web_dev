import mongoose from "mongoose"
const taskSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true , 'Task title content is required'],
        minLength : 12
    },
    text:{
        type : String,
        required : [true , 'Task text content is required'],
        minLength : 7
    },
    priority:{
        type : String,
        enum : ['high', "medium","low"],
        default:"low"
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        red : "user",
        required : [true,"User is required"]
    }
},
{timestamps : true});

// taskmodel
const Task = mongoose.model("task" , taskSchema)
export default Task
