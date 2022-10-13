import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "../useCases/createDelivery/CreateDeliveryUseCase";

class CreateDeliveryController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { item_name} = request.body;
            const { id_client } = request;

            const deliveryUseCase = new CreateDeliveryUseCase();

            const delivery = await deliveryUseCase.execute({ id_client, item_name });
            
            return response.status(201).json(delivery);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateDeliveryController }