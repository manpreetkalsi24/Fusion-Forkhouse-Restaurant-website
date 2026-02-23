import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express ();

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


// test route
app.get("/", (req, res) => {
  res.send("Backend running. Go to /admin");
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));