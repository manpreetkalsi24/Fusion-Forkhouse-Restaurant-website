import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

// API route (JSON)
router.get("/api/menu", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu" });
  }
});

export default router;