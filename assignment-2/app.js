const express = require("express");

const app = express();

// 2) Fullening through 2 middleware
// app.use((req, res, next) => {
//   console.log("From middleware-1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("From middleware-2");
//   res.send("<h1>Assignment-2</h1>");
// });

// 3) handling / and /users request

app.use("/", (req, res, next) => {
  console.log(req.url, "from home");
  res.send(`<h1>Route is : ${req.url}, handled by /</h1>`);
});
app.use("/users", (req, res, next) => {
  console.log(req.url, "from users");
  res.send(`<h1>Route is : ${req.url}, handled by /users</h1>`);
});

app.listen(3000);
