import Task from "../models/task_model"

// get all task
export const getAll = async(res , req , next) => {
    try{
     const tasks = await Task.find({});
     res.status(200).json({
        message : "Tasks fetched",
        data:users
     })
    }catch(error){
        next(error)
    }
}

export const getByid = async(res , req , next) => {
    try{
        const {id} = req.params
        const task = await Task.findOne({_id:id})
        if(!task){
            next({
                message : "Task not found",
                status : 404
            })
            return
        }
    res.status(200).json({
        message : "Task ${id} fetched" ,
        data : task
    })
    }catch(error){
        next(error)
    }
}