import express from 'express';

import podcastController from '../controllers/podcastController.js';

const app = express();

app.post('/podcast', podcastController.create);

app.get('/podcast', podcastController.findAll);

app.get('/podcast/:id', podcastController.findOne);

app.put('/podcast/:id', podcastController.update);

app.delete('/podcast/:id', podcastController.remove);

export { app as podcastRouter };
