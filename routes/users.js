const express = require("express");
const router = express.Router();
const Student = require("../config/db");
const bcrypt = require("bcryptjs")

router.get("/register", (req, res) => {
  res.locals.title = "Softrays | Register"
  res.render("register");
});

router.post("/register", (req, res) => {
  const price = Number(req.body.price);

  const {
    fullName,
    email,
    phoneNumber,
    address,
    nationality,
    state,
    gender,
    qualification,
    course,
    password,
    password2,
  } = req.body;

  // console.log(typeof price);
  let errors = [];

  Student.findOne({ email: email }, function (err, foundStudent) {
    if (err) {
      console.log(err);
    } else if (!foundStudent) {
      const newStudent = new Student({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        nationality: nationality,
        state: state,
        gender: gender,
        qualification: qualification,
        course: course,
        price: price,
        password: password
      });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newStudent.password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) throw err;
            // Set password to hash
            newStudent.password = hash

            //Save the user if !exist
      newStudent.save()
      .then(user => {
        console.log("new Student Successfully Registered")
        res.redirect("login")
      })
      .catch(err => console.log(err))
        });
    });

      

      //Validation
      //Check required fields
      if (
        !fullName ||
        !email || 
        !phoneNumber ||
        !address ||
        !nationality ||
        !state ||
        !gender ||
        !qualification ||
        !course ||
        !password ||
        !password2
      ) {
        errors.push({ msg: "Please fill in all fields" });
      }

      if (errors.length > 0) {
        res.render("register", {
          // errors,
          fullName,
          email,
          phoneNumber,
          address,
          nationality,
          state,
          gender,
          qualification,
          course,
          password,
          password2,
        });
      } else {
        console.log("Registration successful");
      }

      
      
    } else {
    res.redirect("/");
    }
  });
});

router.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
});

router.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin.html");
});

router.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});

router.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

router.get("/login", (req, res) => {
  res.locals.title = "Softrays | Login"
  res.render("login");
});

router.get("/forget-password", (req, res) => {
  res.sendFile(__dirname + "/forget.html");
});

module.exports = router;
