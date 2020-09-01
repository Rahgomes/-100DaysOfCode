import { db } from '../models/index.js';

const Podcast = db.podcast;

const create = async (req, res) => {
  const podcast = new Podcast({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    source: req.body.source,
    itunes: req.body.itunes,
    android: req.body.android,
    rss: req.body.rss,
    soundCloud: req.body.soundCloud,
  });

  try {
    const data = await podcast.save();

    res.send(data);
  } catch (error) {
    res.status(500).send('Erro ao salvar o podcast ' + error);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Podcast.find();

    res.send(data);
  } catch (error) {
    res.status(500).send('Erro ao buscar todos os podcasts');
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Podcast.findById({ _id: id });

    if (!data) {
      res.send('Nao encontrato o podcast id: ' + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar o podcast id: ' + id + ' ' + error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Podcast.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.send('Nao encontrato o podcast id: ' + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send('Erro ao atualizar o podcast id: ' + id + ' ' + error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Podcast.findByIdAndRemove({ _id: id });

    if (!data) {
      res.send('Nao encontrato o podcast id: ' + id);
    } else {
      res.send('Podcast excluido com sucesso');
    }
  } catch (error) {
    res.status(500).send('Erro ao excluir o podcast id: ' + id + ' ' + error);
  }
};

export default { create, findAll, findOne, update, remove };
