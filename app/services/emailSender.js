const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// initialize nidemailer
let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: process.env.SENDER_USER,
            pass: process.env.SENDER_USER_PASS
        }
    }
)
// point to template folder
const handlebarOption = {
    viewEngine: {
        partialsDir: path.join(__dirname, '../views/'),
        defaultLayout: false
    },
    viewPath: path.join(__dirname, '../views/')
}

// use template file with nodemailer
transporter.use('compile', hbs(handlebarOption))

// trigger the sending email
module.exports = {
    sendEmail(args, logoDir, logoName, template, emailDest) {
        console.log(args,"========================== Masuk send email ================");
        let mailOptions = {
            from: `MyAIRFARE ${process.env.SENDER_USER}`,
            to: emailDest,
            subject: 'Account Verify',
            // template: 'verify-register',
            template,
            // context: {
            //     username: args.username,
            //     urlVerify
            // },
            context: args,
            attachments:[
                {
                    filename: logoName,
                    path: path.join(__dirname, logoDir),
                    cid: 'logo'
                },
                {
                    filename: 'Rectangle 146.png',
                    path: path.join(__dirname, '../../bin/public/assets/images/Rectangle 146.png'),
                    cid: 'bar1'
                },
                {
                    filename: 'Rectangle 147.png',
                    path: path.join(__dirname, '../../bin/public/assets/images/Rectangle 147.png'),
                    cid: 'bar2'
                }
            ]
        }
        console.log(mailOptions);
        transporter.sendMail(mailOptions, (error, info) => {
            error ? console.log(error) : console.log(`Message sent: ${info.response}`);
        })
    }
}