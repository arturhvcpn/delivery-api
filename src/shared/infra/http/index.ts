import cors from 'cors';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
// app.use((error:Error, request:Request, response:Response, next: NextFunction) => {
//     if (error instanceof Error){
//         return response.status(400).json({message: error.message});
//     }

//     return response.status(500).json({ message: 'Internal server error'});
// });
app.use(router);

export { app };
