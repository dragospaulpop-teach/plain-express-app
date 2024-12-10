const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("content", {
    content: "HomePage",
    title: "Home Page",
    header: "Some header",
  });
});
app.get("/account", (req, res) => {
  res.render("content", {
    content: "AccountPage",
    title: "Account Page",
    header: "Some header",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
