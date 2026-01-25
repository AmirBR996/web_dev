import express from "express";
import { create_task , get_all , get_by_id ,delete_task ,update_task , pinned_task} from "../controllers/task.controller.js";
import { authenticate } from "../middlewares/auth_middleware.js";
const router = express.Router()
// CRUD
router.get("/" , get_all)

router.post("/" , authenticate , create_task)

router.put("/:user" , update_task)

router.get("/:user" , get_by_id)

router.delete("/:user" , delete_task)

router.get("/:user" , pinned_task)
export default router;
