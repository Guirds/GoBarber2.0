import { Router } from 'express';

// Testando conexão com bando de dados
import User from './app/models/User';

const routes = new Router();

// É necessário utilizar o async await, devido a "demora" de resposta ao executar a opereção no BD
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme',
    email: 'gui07015@gmail.com',
    password_hash: '15646113',
  });

  return res.json(user);
});

export default routes;
