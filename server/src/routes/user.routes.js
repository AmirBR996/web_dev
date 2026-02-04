import express from "express";
import {
  getByid,
  remove,
  getUsers,
  update,
} from "../controllers/user.controller.js";

const router = express.Router();

// CRUD users
router.get("/", getUsers);



// update
// put
router.put("/:userId", update);

// get user by id
// /users/123
router.get("/:id", getByid);

// delete user
router.delete("/:id", remove);

export default router;

// https://codeshare.io/G8Ybgd
