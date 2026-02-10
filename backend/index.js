import express from "express";
const app = express ();

// test route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));