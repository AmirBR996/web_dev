import express from "express";
import { create_task , get_all , get_by_id ,delete_task ,update_task} from "../controllers/task.controller.js";
const router = express.Router()
// CRUD
router.get("/" , get_all)

router.post("/" , create_task)

router.put("/:user" , update_task)

router.get("/:user" , get_by_id)

router.delete("/:user" , delete_task)

export default router;
