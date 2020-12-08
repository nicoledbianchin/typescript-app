interface IMailTo {
    name: string;
    email: string;
}

interface IMailMassage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMassage;
}

interface IEmailService {
    sendMail(request: IMessageDTO) : void;
}

class EmailService implements IEmailService{
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;