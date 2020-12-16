const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const email = req.body.email;
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.post('/register', (req, res) =>{
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