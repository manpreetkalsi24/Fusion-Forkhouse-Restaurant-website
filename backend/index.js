import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose"; 
import cors from "cors";
import frontendRoutes from "./routes/frontendRoutes.js";

dotenv.config();
const app = express ();

app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// this is to Express that we are using Pug files in /views
app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "views"));

// Middleware for form data 
app.use(express.urlencoded({ extended: true }));

// Static files (CSS / images / JS)
app.use(express.static(path.join(process.cwd(), "public")));

// Admin dashboard route
import adminRoutes from "./routes/adminRoutes.js";
app.use("/admin", adminRoutes);

//frontend route for displaying menu items
app.use("/", frontendRoutes);


// test route
app.get("/", (req, res) => {
  res.send("Backend running. Go to /admin");
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));