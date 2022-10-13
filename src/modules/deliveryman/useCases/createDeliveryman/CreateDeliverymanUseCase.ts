import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
    username:string;
    password:string;
}

class CreateDeliverymanUseCase {
    public async execute({ username, password }: ICreateDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: 'insensitive',
                    equals: username
                }
            }
        });

        if(deliverymanExists) {
            throw new Error('Deliveryman already exists');
        }

        const hashedPassword = await hash(password, 10);

        const createDeliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashedPassword,
            }
        });

        return createDeliveryman;
    }
}

export { CreateDeliverymanUseCase }