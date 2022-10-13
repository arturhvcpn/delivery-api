import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "../useCases/updateDelivery/UpdateDeliveryUseCase";

class UpdateDeliveryController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id: id_delivery } = request.params;
            const { id_deliveryman } = request;

            const updateDeliveryUseCase = new UpdateDeliveryUseCase();
            
            const deliveries = await updateDeliveryUseCase.execute({ id_deliveryman, id_delivery });

            return response.status(200).json(deliveries)
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { UpdateDeliveryController }