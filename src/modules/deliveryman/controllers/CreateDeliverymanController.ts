import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "../useCases/createDeliveryman/CreateDeliverymanUseCase";

class CreateDeliverymanController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { username, password } = request.body;

            const deliverymanUseCase = new CreateDeliverymanUseCase();

            const deliveryman = deliverymanUseCase.execute({ username, password });
            
            return response.status(201).json(deliveryman);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { CreateDeliverymanController };
