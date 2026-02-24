import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { getMenuPage } from "../controllers/adminController.js";
import { showAddMenuForm, addMenuItem } from "../controllers/adminController.js";

const router = express.Router();

// Dashboard page
router.get("/", getDashboard);

//Menu Page
router.get("/menu", getMenuPage);

router.get("/menu/add", showAddMenuForm);
router.post("/menu/add", addMenuItem);

export default router;