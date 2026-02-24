import Menu from "../models/Menu.js";

// Dashboard controller
export const getDashboard = (req, res) => {
  res.render("admin/dashboard", {
    title: "Fusion Forkhouse Admin Dashboard",
    menuCount: 12,
    reservationCount: 26,
    contactCount: 8,
    reviewCount: 14
  });
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

export const addMenuItem = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const { name, category, price, description } = req.body;

    const newItem = new Menu({
      name,
      category,
      price,
      description,
      image: req.file ? "/uploads/" + req.file.filename : ""
    });

    await newItem.save();
    res.redirect("/admin/menu");

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.send(error.message);
  }
};