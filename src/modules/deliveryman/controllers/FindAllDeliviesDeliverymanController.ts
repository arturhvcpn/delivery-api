import { Request, Response } from "express";
import { FindAllDeliviesDeliverymanUseCase } from "../useCases/findAllDeliviesDeliveryman/FindAllDeliviesDeliverymanUseCase";

class FindAllDeliviesDeliverymanController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_deliveryman } = request;

            const findAllDeliviesDeliverymanUseCase = new FindAllDeliviesDeliverymanUseCase();

            const deliveries = await findAllDeliviesDeliverymanUseCase.execute(id_deliveryman);

            return response.status(200).json(deliveries);
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}

export { FindAllDeliviesDeliverymanController };
