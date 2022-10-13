import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "../useCases/findAllAvailable/FindAllAvailableUseCase";

class FindAllAvailableController{

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const findAllAvailableUseCase = new FindAllAvailableUseCase();
            
            const deliveries = await findAllAvailableUseCase.execute();

            return response.status(200).json(deliveries)
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}

export { FindAllAvailableController };