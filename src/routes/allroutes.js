import { Router } from "express";
import { addUser, getUsers } from "../controllers/user_controller.js";

export const router = Router()


router.post('/users/add', addUser )
router.get('/users', getUsers)