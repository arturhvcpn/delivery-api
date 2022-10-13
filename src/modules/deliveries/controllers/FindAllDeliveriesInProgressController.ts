import { Request, Response } from 'express';
import { FindAllDeliveriesInProgressUseCase } from '../useCases/findAllDeliveriesInProgress/FindAllDeliveriesInProgressUseCase';

class FindAllDeliveriesInProgressController {
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_client } = request;

            const findAllDeliveriesInProgress = new FindAllDeliveriesInProgressUseCase();
            
            const deliveriesInProgress = await findAllDeliveriesInProgress.execute(id_client);

            return response.status(200).json(deliveriesInProgress);
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}
export { FindAllDeliveriesInProgressController }