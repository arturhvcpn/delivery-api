import { Request, Response } from "express";
import { CreateClientUseCase } from "../useCases/createClient/CreateClientUseCase";

class CreateClientController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { username, password } = request.body
            
            const clientUseCase = new CreateClientUseCase();
            
            const client = await clientUseCase.execute({username, password});

            return response.status(201).json(client);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { CreateClientController };