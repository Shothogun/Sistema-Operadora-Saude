const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (request, response) => {
  const operators = await loadOperatorsCollection();
  response.send(operators.find({}).toArray());
});

async function loadOperatorsCollection() {
  const client = await mongodb.MongoClient.connect
    ('mongodb+srv://admin:mongo123@sistemaoperadorasaude.exdfx.mongodb.net/SistemaOperadoraSaude?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

  return client.db('SistemaOperadoraSaude').collection('operators');
};

module.exports = router;
