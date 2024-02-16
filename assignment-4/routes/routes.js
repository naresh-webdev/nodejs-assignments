const express = require("express");

const router = express.Router();
const users = [];

router.get("/", (req, res, next) => {
  res.render("home.ejs", { pageTitle: "Home" });
});

router.post("/users", (req, res, next) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.render("users.ejs", {
    pageTitle: "Users",
    users: users,
  });
});

module.exports = router;
