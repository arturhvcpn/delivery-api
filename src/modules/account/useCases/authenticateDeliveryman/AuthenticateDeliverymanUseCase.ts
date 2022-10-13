import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

class AuthenticateDeliverymanUseCase {
    public async execute({username, password}:IAuthenticateDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findUnique({
            where: {
                username: username,
            },
        });

        if(!deliverymanExists) {
            throw new Error("Username or password invalid");
        }
        
        const passwordMatch = await compare(password, deliverymanExists.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid");
        }

        const token = sign({ username }, "cdeb6452711bf07c77b30278489aa64a", {
            subject: deliverymanExists.id,
            expiresIn: "8h",
        });

        return token;
    }
}

export { AuthenticateDeliverymanUseCase };