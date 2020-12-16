const express = require('express')
const bodyParser = require('body-parser')
const mailchimp = require('@mailchimp/mailchimp_marketing')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const email = req.body.email;


    // INTEGRATING MAILCHIMP API
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
        
          if(response.status === 200) {
              res.sendFile(__dirname + "/success.html")
          } else {
            res.sendFile(__dirname + "/success.html")
          }
        // response.status === 200 ?
        } catch {}
    }

    run();
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.post('/register', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const nationality = req.body.nationality;
    const state = req.body.state;
    const male = req.body.male;
    const female = req.body.female;
    const ssce = req.body.ssce;
    const bsc = req.body.bsc;
    const pgrad = req.body.pgrad;
    console.log(pgrad, male, state, fullName)
    // const fullName = req.body.fullName;
    // const fullName = req.body.fullName;

})


app.listen(3000, () => {
    console.log('Server started at port 3000')
})