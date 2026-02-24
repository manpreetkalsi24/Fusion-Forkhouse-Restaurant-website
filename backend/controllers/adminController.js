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