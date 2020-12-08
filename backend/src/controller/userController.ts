import { Request, Response } from 'express';
import EmailService from '../service/emailService';

const users = [
    { name: 'user', email: 'user@email.com'},
    { name: 'user2', email: 'user2@email.com'},
    { name: 'user3', email: 'user3@email.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'username', 
                email: 'username@email.com' 
            },
            message: {
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo' 
            }
        });
        return res.send();
    }
};