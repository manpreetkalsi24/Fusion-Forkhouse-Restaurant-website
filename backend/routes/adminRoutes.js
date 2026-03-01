import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { getMenuPage } from "../controllers/adminController.js";
import { showAddMenuForm, addMenuItem } from "../controllers/adminController.js";
import { showEditMenuForm, updateMenuItem } from "../controllers/adminController.js";
import { deleteMenuItem } from "../controllers/adminController.js";
import { getReservationsPage,approveReservation,declineReservation } from "../controllers/adminController.js";
import { getContactMessages } from "../controllers/adminController.js";
import multer from "multer";
import bcrypt from "bcrypt";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "/opt/render/project/src/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

function isAuthenticated(req, res, next) {
  if (req.session.admin) {
    return next();
  }
  res.redirect("/admin/login");
}

router.get("/login", (req, res) => {
  res.render("admin/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded admin for now
  const adminUser = "admin";
  const adminPass = "123456"; 

  if (username === adminUser && password === adminPass) {
    req.session.admin = true;
    return res.redirect("/admin");
  }

  res.redirect("/admin/login");
});
// Dashboard page
router.get("/", isAuthenticated, getDashboard);

router.get("/menu", isAuthenticated, getMenuPage);

// Add Menu item
router.get("/menu/add", isAuthenticated, showAddMenuForm);
router.post("/menu/add", isAuthenticated, upload.single("image"), addMenuItem);

// Edit menu item
router.get("/menu/edit/:id", isAuthenticated, showEditMenuForm);
router.post("/menu/edit/:id", isAuthenticated, upload.single("image"), updateMenuItem);

// Delete menu item
router.post("/menu/delete/:id", isAuthenticated, deleteMenuItem);

// Reservations page
router.get("/reservations", isAuthenticated, getReservationsPage);

// Approve reservation
router.post("/reservations/approve/:id", isAuthenticated, approveReservation);

// Decline reservation
router.post("/reservations/decline/:id", isAuthenticated, declineReservation);

// Contact messages
router.get("/contact", isAuthenticated, getContactMessages);

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
});

export default router;