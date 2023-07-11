const offerModel = require('../models/offerModel');

async function listOffers(req, res) {
  try {
    const offers = await offerModel.getAllOffers();
    res.json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar as ofertas' });
  }
}

async function createOffer(req, res) {
  try {
    const offerData = req.body;
    await offerModel.createOffer(offerData);
    res.status(201).json({ message: 'Oferta criada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a oferta' });
  }
}

async function deleteOffer(req, res) {
  try {
    const offerId = req.params.offerId;
    await offerModel.deleteOffer(offerId);
    res.json({ message: 'Oferta excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a oferta' });
  }
}

module.exports = {
  listOffers,
  createOffer,
  deleteOffer,
};