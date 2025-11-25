import express from "express";
import { generateMCQ } from "../controllers/mcqController.js";

const router = express.Router();

router.post("/generate", generateMCQ);

export default router;
