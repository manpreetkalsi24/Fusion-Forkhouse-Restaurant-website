import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import session from "express-session";
import mongoose from "mongoose"; 
import cors from "cors";
import frontendRoutes from "./routes/frontendRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.use(
  session({
    secret: "fusionforkhouse_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  })
);

// Pug setup
app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(process.cwd(), "public")));

// Serve uploads folder (persistent disk)
app.use("/uploads", express.static("/opt/render/project/src/uploads"));

// Routes
app.use("/admin", adminRoutes);
app.use("/", frontendRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running. Go to /admin");
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server running on port ${port}`));