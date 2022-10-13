import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

async function ensureAuthenticatedClient(request: Request, response: Response, next: NextFunction){
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(403).json('Token is missing')
    }

    try {
        const [, token] = authorization.split(' ');

        const { sub } = verify(token, "cdeb6452711bf07c77b30278489aa64a") as IPayload;

        request.id_client = sub;

        return next();
    } catch (error) {
        return response.status(403).json('Invalid token')
    }
}

async function ensureAuthenticatedDeliveryman(request: Request, response: Response, next: NextFunction){
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(403).json('Token is missing')
    }

    try {
        const [, token] = authorization.split(' ');

        const { sub } = verify(token, "cdeb6452711bf07c77b30278489aa64a") as IPayload;

        request.id_deliveryman = sub;

        return next();
    } catch (error) {
        return response.status(403).json('Invalid token')
    }
}

export { ensureAuthenticatedClient, ensureAuthenticatedDeliveryman };