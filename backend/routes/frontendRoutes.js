import express from "express";
import Menu from "../models/Menu.js";
import Reservation from "../models/Reservation.js";

const router = express.Router();

// API route for menu(JSON)
router.get("/api/menu", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu" });
  }
});

//API route for reservations
router.post("/api/reservations", async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();

    res.status(200).json({
      message: "Reservation submitted successfully"
    });

  } catch (error) {
    console.log("Reservation Error:", error);
    res.status(500).json({
      error: "Error saving reservation"
    });
  }
});

export default router;