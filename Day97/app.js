import express from 'express';

import { podcastRouter } from './routes/podcastRouter.js';

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Conectado com o mongodb com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no mongodb ' + error);
  }
})();

const app = express();

app.use(express.json());

app.use(podcastRouter);

app.listen(process.env.PORT, () => {
  console.log('API em execucao');
});
