const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await  nodemailer.createTestAccount();
    let transport = await  nodemailer.createTestAccount({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        },
        logger: true,
        transactionLog: true, // include SMTP traffic in the logs
        allowInternalNetworkInterfaces: false
    },
    {
        // default message fields

        // sender info
        from: 'Nodemailer <example@nodemailer.com>',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    });

    res.send("I AM SENDING MAIL...");
};

module.exports= sendMail;