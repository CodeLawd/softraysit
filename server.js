const express = require("express");
// const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts")
const bcrypt = require("bcryptjs")
// CALLING THE DATABASE 
const Student = require("./config/db")

const app = express();

app.use(expressLayouts)



// BODYPARSER
app.use(express.urlencoded({ extended: false}));



// CREATING ROUTES
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users"))






// CONNECTING OUR VIEW ENGINE
app.set("view engine", "ejs");

// MAKING THE APPLICATION TO USE STATIC FILES
app.use(express.static("public"));


app.listen(5000, () => {
  console.log("Server started at port 5000");
});
