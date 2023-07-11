const db = require('../config/dbConfig');
const { v4: uuidv4 } = require('uuid');

async function getAllOffers() {
  const query = 'SELECT * FROM offers WHERE deleted = false ORDER BY created_at DESC';
  const { rows } = await db.query(query);
  console.log(query)
  return rows;
}

async function createOffer(offerData) {
  const { walletId, coinId, price, quantity } = offerData;
  const id = uuidv4(); // Gera um ID aleatório

  const query = 'INSERT INTO offers (id, wallet_id, coin_id, price, quantity) VALUES ($1, $2, $3, $4, $5)';
  await db.query(query, [id, walletId, coinId, price, quantity]);
}
async function deleteOffer(offerId) {
  const query = 'UPDATE offers SET deleted = true WHERE id = $1';
  await db.query(query, [offerId]);
}

module.exports = {
  getAllOffers,
  createOffer,
  deleteOffer,
};