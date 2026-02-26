import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { getMenuPage } from "../controllers/adminController.js";
import { showAddMenuForm, addMenuItem } from "../controllers/adminController.js";
import { showEditMenuForm, updateMenuItem } from "../controllers/adminController.js";
import { deleteMenuItem } from "../controllers/adminController.js";
import { getReservationsPage,approveReservation,declineReservation } from "../controllers/adminController.js";
import { getContactMessages } from "../controllers/adminController.js";
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

//Display Menu items Page
router.get("/menu", getMenuPage);

// Add Menu item

router.get("/menu/add", showAddMenuForm);
router.post("/menu/add", upload.single("image"), addMenuItem);

//edit menu item

router.get("/menu/edit/:id", showEditMenuForm);
router.post("/menu/edit/:id", upload.single("image"), updateMenuItem);

//delete menu item

router.post("/menu/delete/:id", deleteMenuItem);

// Reservations page
router.get("/reservations", getReservationsPage);

// Approve reservation
router.post("/reservations/approve/:id", approveReservation);

// Decline reservation
router.post("/reservations/decline/:id", declineReservation);

//route for contact messages
router.get("/contact", getContactMessages);

export default router;