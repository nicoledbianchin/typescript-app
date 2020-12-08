import { Request, Response } from 'express';

const users = [
    { name: 'user', email: 'user@email.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};