import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { getMenuPage } from "../controllers/adminController.js";
import { showAddMenuForm, addMenuItem } from "../controllers/adminController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });


// Dashboard page
router.get("/", getDashboard);

//Menu Page
router.get("/menu", getMenuPage);

// Add Menu

router.get("/menu/add", showAddMenuForm);
router.post("/menu/add", upload.single("image"), addMenuItem);

export default router;