import User from "../models/user.model.js"
export const getUsers = async(req, res , next) => {
  try{
  const users = await User.find()
  res.status(200).json({
    message: "User fetched",
    data: users,
    success: true,
  });

} catch(error){
  next(error)
}
};
export const create = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "User created",
    data: req.body,
  });
};

export const update = (req, res) => {
  // get id
  const id = req.params.userId;
  const data = req.body;
  // get  by id
  // update user
  // save

  res.status(200).json({
    message: "user updated" + " " + id,
  });
};

export const getByid = async(req, res , next) => {
  try{
  const id = req.params.id;
  // const email = req.params.id;
  const user = await User.findById(id)
  // other method
  // const user = await User.findone({email:email});
  if(!user){
    next({
      status :404,
      message : "User not Found"
    })
  }
  res.status(200).json({
    message: `get user by id ${id}`,
    data : user
  });
}catch (error){
  next(error);
}
};

export const remove = async(req, res , next) => {
  try{
  const id = req.params.id;
  const user = await User.findOne({_id : id});
  if(!user){
    next({
      message : "User not found!",
      status:400
    })
    return
  }
  res.status(200).json({
    message: `id: ${req.params.id} deleted`,
  });
}catch(error){
  next(error)
}
};
