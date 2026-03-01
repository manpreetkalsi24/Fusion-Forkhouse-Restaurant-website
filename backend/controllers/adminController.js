import Menu from "../models/Menu.js";

import Reservation from "../models/Reservation.js";

import Contact from "../models/Contact.js";

import nodemailer from "nodemailer";

// Email transporter for admin actions
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Dashboard controller

export const getDashboard = async (req, res) => {
  try {
    const menuCount = await Menu.countDocuments();
    const reservationCount = await Reservation.countDocuments();
    const contactCount = await Contact.countDocuments();

    res.render("admin/dashboard", {
      title: "Fusion Forkhouse Admin Dashboard",
      menuCount,
      reservationCount,
      contactCount
    });

  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).send("Error loading dashboard");
  }
};

//Menu Controller
export const getMenuPage = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.render("admin/menu", { menuItems });
  } catch (error) {
    console.log(error);
    res.send("Error loading menu");
  }
};

export const showAddMenuForm = (req, res) => {
  res.render("admin/addMenu");
};

//addMenuItem function

export const addMenuItem = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);

    const { name, category, price } = req.body;

    const newItem = new Menu({
      name,
      category,
      price,
      image: req.file ? "/uploads/" + req.file.filename : ""
    });

    await newItem.save();
    res.redirect("/admin/menu");

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.send(error.message);
  }
};

//editMenu Function

export const showEditMenuForm = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);

    if (!item) {
      return res.send("Item not found");
    }

    res.render("admin/editMenu", { item });

  } catch (error) {
    console.log(error);
    res.send("Error loading edit page");
  }
};


export const updateMenuItem = async (req, res) => {
  try {
    const { name, category, price } = req.body;

    const updatedData = {
      name,
      category,
      price
    };

    // If new image uploaded, update image
    if (req.file) {
      updatedData.image = "/uploads/" + req.file.filename;
    }

    await Menu.findByIdAndUpdate(req.params.id, updatedData);

    res.redirect("/admin/menu");

  } catch (error) {
    console.log(error);
    res.send("Error updating item");
  }
};

//delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    console.log("DELETE ID:", req.params.id);

    const deletedItem = await Menu.findByIdAndDelete(req.params.id);

    console.log("Deleted Item:", deletedItem);

    res.redirect("/admin/menu");

  } catch (error) {
    console.log("DELETE ERROR:", error);
    res.send(error.message);
  }
};

// Load reservations page in admin panel
export const getReservationsPage = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });

    res.render("admin/reservations", { reservations });

  } catch (error) {
    console.log("Error loading reservations:", error);
    res.send("Error loading reservations");
  }
};

// This function approves a reservation
export const approveReservation = async (req, res) => {
  try {

    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.redirect("/admin/reservations");

    reservation.status = "Approved";
    await reservation.save();

    // Creation of transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Fusion Forkhouse" <${process.env.EMAIL_USER}>`,
      to: reservation.email,
      subject: "Your Reservation is Confirmed - Fusion Forkhouse",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          
          <h2 style="color:#2e7d32;">Reservation Confirmed</h2>

          <p>Dear ${reservation.firstName} ${reservation.lastName},</p>

          <p>
            We are delighted to inform you that your table reservation at 
            <strong>Fusion Forkhouse</strong> has been <strong>approved</strong>.
          </p>

          <h3 style="margin-top: 20px;">Reservation Details:</h3>

          <ul style="list-style: none; padding: 0;">
            <li><strong>Date:</strong> ${reservation.date}</li>
            <li><strong>Time:</strong> ${reservation.time}</li>
            <li><strong>Number of Guests:</strong> ${reservation.guests}</li>
          </ul>

          <p style="margin-top: 20px;">
            Please arrive 10 minutes before your scheduled time. 
            If you need to make any changes, feel free to contact us.
          </p>

          <p>
            We look forward to serving you and providing an exceptional dining experience!
          </p>

          <br/>

          <p>Warm regards,</p>
          <p><strong>Fusion Forkhouse Team</strong></p>

          <hr style="margin-top: 20px;" />
          <small>
            This is an automated confirmation email. Please do not reply directly to this message.
          </small>

        </div>
      `
    });

    res.redirect("/admin/reservations");

  } catch (error) {
    console.log("Approve Error:", error.message);
    res.redirect("/admin/reservations");
  }
};

// decline Reservation function
export const declineReservation = async (req, res) => {
  try {

    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.redirect("/admin/reservations");

    const reason = req.body.reason || "Please select another time slot.";

    reservation.status = "Declined";
    reservation.declineReason = reason;
    await reservation.save();

    // Creation of transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Fusion Forkhouse" <${process.env.EMAIL_USER}>`,
      to: reservation.email,
      subject: "Reservation Update - Fusion Forkhouse",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          
          <h2 style="color:#c62828;">Reservation Update</h2>

          <p>Dear ${reservation.firstName} ${reservation.lastName},</p>

          <p>
            Thank you for choosing <strong>Fusion Forkhouse</strong>.
          </p>

          <p>
            Unfortunately, we are unable to accommodate your reservation request.
          </p>

          <h3 style="margin-top: 20px;">Reservation Details:</h3>

          <ul style="list-style: none; padding: 0;">
            <li><strong>Date:</strong> ${reservation.date}</li>
            <li><strong>Time:</strong> ${reservation.time}</li>
            <li><strong>Number of Guests:</strong> ${reservation.guests}</li>
          </ul>

          <p style="margin-top: 15px;">
            <strong>Reason: Please try again some another time slot. No table is available for this time slot.</strong>
          </p>

          <p>
            We sincerely apologize for the inconvenience. 
            Please feel free to select another available time slot.
          </p>

          <br/>

          <p>Kind regards,</p>
          <p><strong>Fusion Forkhouse Team</strong></p>

          <hr style="margin-top: 20px;" />
          <small>
            This is an automated notification. Please do not reply directly to this email.
          </small>

        </div>
      `
    });

        res.redirect("/admin/reservations");

      } catch (error) {
        console.log("Decline Error:", error.message);
        res.redirect("/admin/reservations");
      }
    };

// Show contact messages in admin
export const getContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.render("admin/contact", { messages });
  } catch (error) {
    console.log("Error fetching messages:", error);
    res.send("Error loading messages");
  }
};