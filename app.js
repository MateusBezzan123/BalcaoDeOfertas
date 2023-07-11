const express = require('express');
const offerRoutes = require('./src/routes/offerRoutes');

const app = express();

app.use(express.json());

app.use('/api', offerRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});