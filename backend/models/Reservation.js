import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits"]
  },
  email: {
    type: String,
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"]
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  specialRequests: String,
  status: {
    type: String,
    default: "Pending"  // Pending | Approved | Declined
  }
  }, { timestamps: true });

// Collection name = reservations
export default mongoose.model("Reservation", reservationSchema, "reservations");