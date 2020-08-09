import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.listen(3001, () => {
    console.log('API started!!!');
});