import express from 'express';

const app = express();

app.use(express.json());

app.all('/testeAll', (req, res) => {
    res.send(req.method);
})

app.get('/teste?', (req, res) => {
    res.send('/teste?');
})

app.get('/buzz+', (req, res) => {
    res.send('/buzz+');
})

app.get('/computador*pentium', (req, res) => res.send(req.path));

app.post('/test(ing)?', (req, res) => res.send('/test(ing)'));

app.post('/tst', (req, res) => {
    console.log(req.body);
    res.send('res.body');
})

app.get('/param/:id/:asd?', (req, res) => {
    if(req.params.asd === undefined){
        res.send(req.params.id + "Apenas um parâmetro")
    } else {
        res.send(req.params.id + " " + req.params.asd);
    }
})

app.get(/.*Red$/, (req, res) => {
    res.send(req.path);
})

app.get('/testeQuery', (req, res) => {
    res.send(req.query);
})

app.get('/testMultiplesHandlers', (req, res, next) => {
    console.log('callback 1');
    next();
}, (req, res, next) => {
    console.log('callback 2');
    res.send('Next efetuado com sucesso!!!');
    res.end();
})

const callback1 = (req, res, next) => {
    console.log('Callback 1');
    next();
}

function callback2(req, res, next) {
    console.log('Callback 2');
    next();
}

const callback3 = (req, res) => {
    console.log('Callback 3');
    res.end();
}

app.get('/testMultiplesHandlersArray', [callback1, callback2, callback3]);

app.route('/testeRoute')
    .get((req, res) => {
        res.send('/testeRoute GET');
    })
    .post((req, res) => {
        res.send('/testeRoute POST');
    })
    .delete((req, res) => {
        res.send('/testeRoute DELETE');
    })

app.listen(3000, (req, res) => console.log('Tudo ok com a rota'))