var nodemailer = require('nodemailer');
// const { DataService } = require('../../app/data.service');
// const myDataService = new DataService();


// import { DataService } from '../data.service';
// var dataService = require('../../app/data.service.ts');
// var dataService = new DataService();
// import '../../app/data.service';
// currentCode = new dataService.DataService().getCurrentCode();
// currentMailTo = new dataService.DataService().getCurrentMailToAddress();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ooo.000.111.222.0000@gmail.com',
    pass: 'bangladesh@1'
  }
});

var mailOptions = {
  from: 'ooo.000.111.222.0000@gmail.com',
  to: 'u__@tuta.io',
  // to: myDataService.getCurrentMailToAddress(),
  // to: currentMailTo,
  subject: 'Sending Email using Node.js',
  text: 'that was easy'
  //text: 'myDataService.getCurrentCode()'
  // text: 'Your verification code is : ' + currentCode
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});