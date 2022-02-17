"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MailerService {
    constructor(nodemailer) {
        this.nodemailer = nodemailer;
    }
    sendMail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing
                let testAccount = yield this.nodemailer.createTestAccount();
                // create reusable transporter object using the default SMTP transport
                let transporter = this.nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false,
                    auth: {
                        user: testAccount.user,
                        pass: testAccount.pass, // generated ethereal password
                    },
                });
                // send mail with defined transport object
                let info = yield transporter.sendMail({
                    from: '"Fred Foo 👻" <foo@example.com>',
                    to: user.email,
                    subject: "Hello ✔",
                    text: "Hello world?",
                    html: "<b>Hello world?</b>", // html body
                });
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", this.nodemailer.getTestMessageUrl(info));
            }
            catch (err) {
                throw new Error('Unable to send the email verification');
            }
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
}
exports.default = MailerService;
