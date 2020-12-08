interface IMailTo {
    name: string;
    email: string;
}

interface IMailMassage {
    subject: string;
    body: string;
    attachment?: string[];
}

class EmailService {
    sendMail(to: IMailTo, message: IMailMassage) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;