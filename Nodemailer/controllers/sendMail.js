const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // Connect with SMTP
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "miracle.casper@ethereal.email",
            pass: "X5dQmYbQTgyVvFPEWE",
        },
    });

    let info = await transporter.sendMail({
        from: '"Aditya Raj" <adityavishal903@gmail.com>', // Sender address
        to: "adityavishal903@outlook.com", // List of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello Aditya raj", // Plain text body
        html: "<b>Hello Aditya</b>", // HTML body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Email sent successfully:", info);


    res.json(info);
};
module.exports = sendMail;
