import express from 'express';
import routes from './routes';

// Como não é necessário ter um retorno do arquivo, basta apenas chamar ele
import './database';

class App {
  // Executa automaticamente sempre que a class for chamada
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
