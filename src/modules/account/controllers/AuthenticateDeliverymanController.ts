import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "../useCases/authenticateDeliveryman/AuthenticateDeliverymanUseCase";


class AuthenticateDeliverymanController {
    public async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { username, password } = request.body;
            
            const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

            const token = await authenticateDeliverymanUseCase.execute({username, password});

            return response.json(token);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { AuthenticateDeliverymanController };