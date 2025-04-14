import express from "express"
import { deleteUser, login, registerUser } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register", registerUser)
router.get("/login", login)
router.get("/delete", deleteUser)

export default router