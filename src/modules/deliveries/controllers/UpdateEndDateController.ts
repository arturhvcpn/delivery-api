import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "../useCases/updateEndDate/UpdateEndDateUseCase";

class UpdateEndDateController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_deliveryman } = request;
            const { id: id_delivery } = request.params;

            const updateEndDateUseCase = new UpdateEndDateUseCase();

            const deliverieUpdated = await updateEndDateUseCase.execute({
                id_delivery,
                id_deliveryman
            });

            return response.status(200).json(deliverieUpdated);
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}

export { UpdateEndDateController };
