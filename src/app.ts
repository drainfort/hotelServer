import * as express from 'express'
import apiRouter from './api/routes/api.route'

class App {
  public app

  constructor () {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    this.app.use('/', apiRouter);
  }
}

export default new App().app