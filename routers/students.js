import express from "express";
import {getStudents, postStudents} from "../controllers/getStudents.js";
import {ageCkecker} from "../middelwares/ageCheck.js";

const router = express.Router();


router.use(ageCkecker);

// create a get router 
router.get("/students", getStudents);
router.post("/students", ageCkecker, postStudents); // router middelwares 

export default router;