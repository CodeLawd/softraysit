const express = require('express')
const bodyParser = require('body-parser')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const ejs = require('ejs')
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('view engine', 'ejs');

// SETTING UP THE DATABASE
mongoose.connect('mongodb://localhost:27017/softraysDB', {useNewUrlParser: true, useUnifiedTopology: true});

// DEFINING THE SCHEMA
const registerSchema = new Schema({
    fullName: {type: String, require: [true, "Your Full Name is required."]},
    email: {
        type: String,
        validate: {
            validator: function(v) {
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(String(v).toLowerCase());
            },
            required: [true, "Email is not valid. Please enter a valid email."]
        }
    },
    phone: String,
    address: {type: String, required: [true, "Please enter your address"]},
    nationality: {type: String, required: [true, "Please enter your nationality"]},
    state: {type: String, required: [true, "Please enter your state of origin"]},
    gender: {type: String, required: [true, "Please select a gender"]},
    qualification: {type: String, required: [true, "Please enter a qualification"]},
    course: {type: String, required: [true, "Please select a course"]},
    price: {type: Number, required: [true]}
})

//  DEFINING A MODEL FOR THE SCHEMA
const Student = model("Student", registerSchema);

softrays = "Softrays Engineering Tech"
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const email = req.body.email;

    //  INTEGRATING MAILCHIMP API
    mailchimp.setConfig({
        apiKey: "5897a554a7510fd1cc0538de6b310dc1-us19",
        server: "us19",
    });

    const listId = "2d307f8247";
    const subscribingUser = {
        email: email
    };

    
    async function run() {
        const response = await mailchimp.ping.get();
        console.log(response);

        try{
            const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
          });
        
          if(response.status === "subscribed") {
              res.sendFile(__dirname + "/success.html")
          } else {
            res.sendFile(__dirname + "/failure.html")
          }
        // response.status === 200 ?
        } catch (err){
            console.log(err)
        }
    }

    run();
})

app.get('/register', (req, res) => {
    res.render("register")
})

app.post('/register', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const nationality = req.body.nationality;
    const state = req.body.state;
    const gender = req.body.gender;
    const qualification = req.body.qualification;
    const course = req.body.course;
    const price = req.body.price

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
        price: price
    })

    newStudent.save()


})

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + "/dashboard.html")
})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + "/admin.html")
})

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + "/profile.html")
})

app.get('/success', (req, res) => {
    res.sendFile(__dirname + "/success.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.get('/forget-password', (req, res) => {
    res.sendFile(__dirname + "/forget.html")
})

app.listen(3000, () => {
    console.log('Server started at port 3000')
})

