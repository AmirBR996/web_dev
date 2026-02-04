import Task from "../models/task.model.js";

// get all task
export const getAll = async (req, res, next) => {
  try {
    const user = req.user.id
    const tasks = await Task.find({user:user}).populate('user');

    res.status(200).json({
      message: "Tasks fetched",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

// get by id
export const getById = async (req, res, next) => {
  try {
    const user = req.user.id;
    const { id } = req.params;

    const task = await Task.findOne({ _id: id,user }).populate('user');

    if (!task) {
      next({
        message: "Task not found",
        status: 404,
      });
      return;
    }

    res.status(200).json({
      message: `task ${id} fetched`,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

//! create

export const create = async(req,res,next)=>{
  try {

    const user = req.user.id

    const {title,text,priority,pinned} = req.body

    if(!title){
      next({
        message:'Task title is required',
        status:400
      })
    }

    if(!text){
      next({
        message:'Task description is required',
        status:400
      })
    }

    if(!user){
      next({
        message:'user is required',
        status:400
      })
    }

    const task = await Task.create({title,text,priority,user,pinned})

    res.status(201).json({
      message:'Task created',
      data:task
    })
    
  } catch (error) {
    next(error)
  }

}

//! 
export const update = async(req,res,next) =>{
  try {
    const {id} = req.params
    const user = req.user.id
    const {title,text,priority,pinned} = req.body

    const task = await Task.findOne({_id:id,user:user})

    if(!task){
      next({
        message:'Task not found',
        status:400
      })
      return
    }

    if(title){
       task.title = title
    }

    if(text){
      task.text = text
    }
    if(priority){
      task.priority = priority
    }

    if(pinned){
      task.pinned = pinned
    }

    await task.save();

      res.status(200).json({
      message:`task ${task._id} updated`,
      data:task
    })


  } catch (error) {
    next(error)
  }
}


//! delete
export const remove = async(req,res,next) =>{
  try {
    const {id} = req.params;
    const user = req.user.id

    const task = await Task.findOne({_id:id ,user:user})

    if(!task){
      next({
        message:'Task not found',
        status:400
      })
      return
    }

    await task.deleteOne()

    res.status(200).json({
      message:`task ${task._id} deleted`,
      data:null
    })


  } catch (error) {
    next(error)
  }
}


// pinned task


// get all pinned task