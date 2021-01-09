import express from 'express';
import { Request, Response } from 'express';
import 'reflect-metadata';

import { container } from './inversify.config';
import { UserController } from './controller/userController';
import TYPES from './constant/types';

const userController = container.get<UserController>(TYPES.UserController);

const app = express();

app.get('/', (req: Request, res: Response) => {
    const user = userController.whoami('')
    res.status(200).json(user);
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
}
);
