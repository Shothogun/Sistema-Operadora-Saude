const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const operators = require('./routes/api/operators');

app.use('/api/operators', operators);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🐘 Server iniciado 🐘`));