import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('ok!!!');
})

app.post('/', (req, res) => {
    res.send('post ok!!!');
})

app.listen(3000, () => {
    console.log('!!!');
})