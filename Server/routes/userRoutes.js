import express from "express"

import { registerUser, getUsers, loginUser } from "../controller/userController.js"

const router = express.Router();

router.post("/register-user", registerUser);
router.get("/users", getUsers);
router.post("/login", loginUser);



export {router}