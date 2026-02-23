import express from "express";
import { getDashboard } from "../controllers/adminController.js";

const router = express.Router();

// Dashboard page
router.get("/", getDashboard);

export default router;