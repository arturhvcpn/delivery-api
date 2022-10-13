import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "../useCases/authenticateClient/AuthenticateClientUseCase";

class AuthenticateClientController {
    
    public async handle(request: Request, response: Response): Promise<Response>{
        try {
            const { username, password } = request.body;
            
            const authenticateClientUseCase = new AuthenticateClientUseCase();

            const token = await authenticateClientUseCase.execute({username, password});

            return response.json(token);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { AuthenticateClientController }