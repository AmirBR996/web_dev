import Task from "../models/task_model.js";

export const create_task = async (req, res, next) => {
  try {
    let { title, text, priority, user } = req.body;

    if (!title) throw new Error("Title is required");
    if (!text) throw new Error("Task text is required");
    if (!priority) throw new Error("Priority is required");
    if (!user) throw new Error("User is required");
    priority = priority.toLowerCase()
    const task = await Task.create({
      title,
      text,
      priority,
      user
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

export const get_all = async(req , res , next) => {
    try{
        const tasks = await Task.find()
         res.status(200).json({
         message: "Tasks fetched",
         data: tasks,
         success: true,
  });

    }catch(error){
        next(error);
    }
}

export const get_by_id = async(req,res,next) => {
    try{
      const user = req.params.user;
      const task = await Task.findOne({user : user})
      
      if(!user){
    next({
      status :404,
      message : "User not Found"
    })
  }
  res.status(200).json({
    message: `Task of id ${user}`,
    data : task
  });
    }catch(error){
        next(error);
    }
}

export const delete_task = async(req , res , next) => {
  try{
  const user = req.params.user;
  const task = await Task.findOneAndDelete({user : user});
  if(!user){
    next({
      message : "User task not found!",
      status:400
    })
    return
  }
  res.status(200).json({
    message: `id: ${req.params.id} deleted`,
    task : task
  });
  }catch(error){
    next(error);
  }
}

export const update_task = async (req, res, next) => {
  try {
  
    const user = req.params.user; // from auth middleware

    const task = await Task.findOne({user : user});

    if (!task) {
      return next({
        message: "Task not found or unauthorized",
        status: 404
      });
    }

    const { title, text, priority } = req.body;

    if (title) task.title = title;
    if (text) task.text = text;
    if (priority) task.priority = priority.toLowerCase();

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};
