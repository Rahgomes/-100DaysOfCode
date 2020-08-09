import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    throw new Error('Mensagem de erro teste');
})

app.post('/', async (req, res, next) => {
    try{
        throw new Error('Mensagem de erro assíncrona.');
    } catch(err) {
        next(err);
    }
})

app.use((err, req, res, next) => {
    console.log('Erro 1');
    next(err);
})

app.use((err, req, res, next) => {
    console.log('Erro 2');
    res.status(500).send('Ocorreu um erro, tente novamente mais tarde.');
})

app.listen(3000, () => {
    console.log("API Iniciada");
})