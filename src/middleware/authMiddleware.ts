import * as express from "express";
import { Container } from "inversify";
import { container } from '../inversify.config';

type roleType = 'admin' | 'user'

const authMiddlewareFactory = (container: Container) => {
    return (config: { role: roleType }) => {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log(req.cookies);
            const dummyRole = 'admin'
            if (dummyRole === config.role) {
                console.log(`Passing Middleware. Role is ${config.role}`);
            }
            next();
            // res.status(403).end("Forbidden");
            // res.status(401).end("Unauthorized");
        };
    };
}

const authMiddleware = authMiddlewareFactory(container);

export { authMiddleware };
