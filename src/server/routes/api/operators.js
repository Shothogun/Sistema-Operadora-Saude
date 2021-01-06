const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (request, response) => {
  const operators = await loadOperatorsCollection();
  response.send(await operators.find({}).toArray());
});

router.get('/search', async (request, response) => {
  const operators = await loadOperatorsCollection();
  response.send(await operators.find(
    {'razaoSocial': new RegExp(request.query.razaoSocial, "i")}).toArray());
});

router.post('/', async (request, response) => {
  const operators = await loadOperatorsCollection();
  await operators.insertOne({
    registroANS: request.body.registroANS,
    cnpj: request.body.cnpj,
    razaoSocial: request.body.razaoSocial,
    nomeFantasia: request.body.nomeFantasia,
    modalidade: request.body.modalidade,
    logradouro: request.body.logradouro,
    numero: request.body.numero,
    complemento: request.body.complemento,
    bairro: request.body.bairro,
    cidade: request.body.cidade,
    uf: request.body.uf,
    cep: request.body.cep,
    ddd: request.body.ddd,
    telefone: request.body.telefone,
    fax: request.body.fax,
    enderecoEletronico: request.body.enderecoEletronico,
    representante: request.body.representante,
    cargoRepresentante: request.body.cargoRepresentante,
    dataRegistroANS: request.body.dataRegistroANS
  })
  response.status(201).send();
});

router.delete('/:id', async(request, response) => {
  const operators = await loadOperatorsCollection();
  await operators.deleteOne({_id: new mongodb.ObjectID(request.params.id)});
  response.status(200).send();
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
