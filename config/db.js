const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// SETTING UP THE DATABASE
mongoose.connect("mongodb://localhost:27017/softraysDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// DEFINING THE SCHEMA
const registerSchema = new Schema({
  fullName: { type: String, require: [true, "Your Full Name is required."] },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(v).toLowerCase());
      },
      required: [true, "Email is not valid. Please enter a valid email."],
    },
  },
  phone: String,
  address: { type: String, required: [true, "Please enter your address"] },
  nationality: {
    type: String,
    required: [true, "Please enter your nationality"],
  },
  state: {
    type: String,
    required: [true, "Please enter your state of origin"],
  },
  gender: { type: String, required: [true, "Please select a gender"] },
  qualification: {
    type: String,
    required: [true, "Please enter a qualification"],
  },
  course: { type: String, required: [true, "Please select a course"] },

  price: { type: Number, required: [true] },
  password: { type: String, required: [true] }
});

//  DEFINING A MODEL FOR THE SCHEMA
const Student = model("Student", registerSchema);

module.exports = Student