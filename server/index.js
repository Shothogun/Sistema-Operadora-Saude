const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const operators = require('./routes/api/operators');

app.use('/api/operators', operators);

// Production config
if(process.env.NODE_ENV === 'production'){
  // Static folder
  app.use(express.static(__dirname + '/public/'));
  
  // Handle Single page application
  app.get(/.*/, (request, response) => response.sendFile(__dirname, '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🐘 Server iniciado 🐘`));