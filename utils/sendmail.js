"use strict"
const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
	// Generate test SMTP service account from ethereal.email

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'noemie.gleichner@ethereal.email',
        pass: 'zBWgvgs75D3ZBsn91s'
    }
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Second mail ✔", // Subject line
		text: "Second mail!", // plain text body
		html: "<b>Second mail!</b>", // html body
	})

	console.log("Message sent: %s", info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendMail