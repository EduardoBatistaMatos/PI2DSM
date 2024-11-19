const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importa as rotas
const consultaRoutes = require('./routes/consultaRoutes');
const empresasRoutes = require('./routes/empresasRoutes');
const sobreRoutes = require('./routes/sobreRoutes');
const contatoRoutes = require('./routes/contatoRoutes');
const criarcontaRoutes = require('./routes/criarcontaRoutes');
const feedbacksRoutes = require('./routes/feedbacksRoutes');
const indexRoutes = require('./routes/indexRoutes');

// Configura o aplicativo
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

// Configuração de rotas
app.use('/consulta', consultaRoutes);
app.use('/empresas', empresasRoutes);
app.use('/sobre', sobreRoutes);
app.use('/contato', contatoRoutes);
app.use('/criarconta', criarcontaRoutes);
app.use('/feedbacks', feedbacksRoutes);
app.use("/", indexRoutes);

// Exporta o aplicativo para o Vercel
module.exports = app;
