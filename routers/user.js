import express from "express";
import {users} from "../controllers/user.js";

const router = express.Router();

router.get("/users", users);


export default router;