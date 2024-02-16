const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

app.listen(3000);
