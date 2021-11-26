const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const services = require('./services');
const auth_middleware = require('./middlewares/auth');

const api = express.Router();

const auth = express.Router();
auth.post('/', services.auth.login);
api.use('/auth', auth);

const countries = express.Router();
countries.use(auth_middleware.authorize);
countries.get('/', services.countries.getAll);
countries.post('/', services.countries.create);
countries.put('/:uid', services.countries.update);
countries.delete('/:uid', services.countries.remove);

api.use('/countries', countries);

const users = express.Router();

users.get('/', services.users.getAll);
users.post('/', services.users.create);
users.put('/:uid', services.users.update);
users.delete('/:uid', services.users.remove);

api.use('/users', users);

const scores = express.Router();

scores.get('/', services.scores.getAll);
scores.post('/', services.scores.create);
scores.put('/:uid', services.scores.update);
scores.delete('/:uid', services.scores.remove);

api.use('/scores', scores);

app.use('/api', api);

app.listen(PORT);
