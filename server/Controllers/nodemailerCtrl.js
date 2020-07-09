const nodemailer = require('nodemailer');

module.exports = {
sendMail: async (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Karpós Team" <karpos-app@dev.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Welcome to Karpós!", // Subject line
    text: "Here are your account details.", // plain text body
    html: `<h1>Welcome to Karpós</h1>
    <p>Your account details:</p>
    <ul>
        <li>First Name: ${req.body.first_name}</li>
        <li>Last Name: ${req.body.last_name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}