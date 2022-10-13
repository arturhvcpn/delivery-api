import { prisma } from "../../../../database/prismaClient";

class FindAllDeliviesDeliverymanUseCase {

	public async execute(id_deliveryman: string) {
		const result = await prisma.deliveryman.findMany({
			where: {
				id: id_deliveryman
			},
			select: {
				deliveries: true,
        id: true,
        username: true,
		}})
		
		return result;
	}
}
export { FindAllDeliviesDeliverymanUseCase };