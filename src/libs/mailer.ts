import { User } from './../modules/User/entity';

export interface IMailerService {
    sendMail(user: User) : Promise<void>
}

class MailerService implements IMailerService {
    private nodemailer;
    constructor(nodemailer: any) {
        this.nodemailer = nodemailer;
    }

    async sendMail(user: User) {

        try {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await this.nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = this.nodemailer.createTransport({
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
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: user.email, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            // console.log("Message sent: %s", info.messageId);
            // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // // Preview only available when sending through an Ethereal account
            // console.log("Preview URL: %s", this.nodemailer.getTestMessageUrl(info));
        } catch(err) {
            throw new Error('Unable to send the email verification');
        }
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}

export default MailerService;