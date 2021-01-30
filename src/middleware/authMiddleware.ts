import * as express from "express";
import { Container } from "inversify";
import { container } from '../inversify.config';

function authMiddlewareFactory(container: Container) {
    return (config: { role: string }) => {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log(req.cookies);
            console.log(`Passing Middleware. Role is ${config.role}`);
            next();
            // res.status(403).end("Forbidden");
            // res.status(401).end("Unauthorized");
        };
    };
}

const authMiddleware = authMiddlewareFactory(container);

export { authMiddleware };
