const express = require('express');
const offerController = require('../controllers/offerController');

const router = express.Router();

router.get('/offers', offerController.listOffers);
router.post('/offers', offerController.createOffer);
router.delete('/offers/:offerId', offerController.deleteOffer);

module.exports = router;