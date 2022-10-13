import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesInProgressUseCase {

    public async execute(id_client: string){
        const result = await prisma.clients.findMany({
            where: {
                id: id_client,
            },
            select: {
                id: true,
                username: true,
                deliveries: {
                    where: {
                        end_at: null,
                    }
                },
            }
        });

        return result;
    }
}

export { FindAllDeliveriesInProgressUseCase };