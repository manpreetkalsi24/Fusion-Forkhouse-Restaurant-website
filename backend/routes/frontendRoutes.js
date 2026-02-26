import express from "express";
import Menu from "../models/Menu.js";
import Reservation from "../models/Reservation.js";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
const router = express.Router();

// Created email transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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

// This route handles reservation form submission
router.post("/api/reservations", async (req, res) => {
  try {
    // Check if same date & time already booked
    const existingReservation = await Reservation.findOne({
      date: req.body.date,
      time: req.body.time,
      status: { $ne: "Declined" }
    });

    if (existingReservation) {
      return res.status(400).json({
        error: "This time slot is already booked. Please choose another time."
      });
    }
    // Save reservation in database
    const reservation = new Reservation(req.body);
    await reservation.save();

    // Send confirmation email (Pending status)
    await transporter.sendMail({
      from: `"Fusion Forkhouse" <${process.env.EMAIL_USER}>`,
      to: reservation.email,
      subject: "Reservation Received - Pending Approval",
      html: `
        <h2>Hello ${reservation.firstName},</h2>
        <p>We have received your reservation request.</p>
        <p><strong>Date:</strong> ${reservation.date}</p>
        <p><strong>Time:</strong> ${reservation.time}</p>
        <p>Status: <b>Pending Approval</b></p>
        <br/>
        <p>We will notify you once it is reviewed.</p>
      `
    });
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

// Save contact message
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newMessage = new Contact({
      firstName,
      lastName,
      email,
      message
    });

    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.log("Contact Error:", error);
    res.status(500).json({ error: "Error saving message" });
  }
});

export default router;