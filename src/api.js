require('dotenv').config({ path: 'variaveis.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = express();
const router = require('./routes');

//configurando a API para fazer o parsing do body para JSON
api.use(express.json());

api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(router);

const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});