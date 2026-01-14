export const getUsers = (req, res) => {
  res.status(200).json({
    message: "User fetched",
    data: [],
    success: true,
  });
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

export const getByid = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: `get user by id ${id}`,
  });
};

export const remove = (req, res) => {
  res.status(200).json({
    message: `id: ${req.params.id} deleted`,
  });
};
