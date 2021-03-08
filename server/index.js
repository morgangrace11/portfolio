const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
// const creds = require('../email.config');
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json())

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: creds.USER,
//         pass: creds.PASSWORD
//     }
// });

// transporter.verify((error, success) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Server is ready to take messages');
//     }
//   });

const transporter = nodemailer.createTransport({
    port: 25,
    host: 'localhost',
    tls: {
      rejectUnauthorized: false
    },
  });

app.post('/send', (req, res) => {
    console.log(req.body)
    var mail = {
        from: req.body.email,
        to: creds.EMAIL,  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: req.body.message
      }
    
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
})

app.listen(port, () => console.log(`Listening on port ${port}!`));