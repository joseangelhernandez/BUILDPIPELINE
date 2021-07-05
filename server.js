const express = require('express');
const SMTPPool = require('nodemailer/lib/smtp-pool');

const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;


app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email', (req, res) => {
    //TODO:
    //send email here
    console.log('Data: ', req.body);
    res.json({message: 'Mensaje recibido!!' })
});


app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, ()=> log('Server esta en el PORT, ', 8080));