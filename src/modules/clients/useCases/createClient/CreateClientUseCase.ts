import { hash } from 'bcrypt'
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    username:string;
    password:string;
}

class CreateClientUseCase {

    public async execute({ username, password }:ICreateClient): Promise<ICreateClient>{
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    //ignora se tem maisculo ou minisculo
                    mode: 'insensitive',
                    equals: username
                }
            }
        });
        
        //validar se o usuário existe
        if(clientExists){
            throw new Error('Client already exists');
        }
        
        //criptografar a senha
        const hashedPassword = await hash(password, 10);

        //salvar o client
        const client = await prisma.clients.create({
            data: {
                username: username,
                password: hashedPassword
            }
        });
        
        return client;
    }
}

export { CreateClientUseCase };