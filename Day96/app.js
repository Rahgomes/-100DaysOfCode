import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USERBD}:${process.env.PWBD}@clusterbootcamp.bbalc.mongodb.net/grades?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado ao mongodb com sucesso");
    } catch (error) {
        console.log("Erro ao conectar ao mongodb: "+error);
    }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));