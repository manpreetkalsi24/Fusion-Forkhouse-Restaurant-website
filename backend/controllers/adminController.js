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