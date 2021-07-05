const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'dbd723085a0c33c5b33c5f52cb1908a9-c4d287b4-cfca19ac',
        domain: 'https://api.mailgun.net/v3/sandbox29d0aafc2789403e9d79d8ae8fce1290.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'joseangel03082010@gmail.com',
    to: 'ja.hernandezds@gmail.com',
    subject: 'Prueba',
    text: 'Prueba Prueba'
};

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Sucedio un error');
    } else{
        console.log('Mensaje enviado.');
    }
});