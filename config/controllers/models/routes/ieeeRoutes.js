import express from "express";
import { convertToIEEE } from "../controllers/ieeeController.js";

const router = express.Router();

router.post("/convert", convertToIEEE);

export default router;
