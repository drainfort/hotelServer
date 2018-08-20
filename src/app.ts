import * as express from 'express'
import * as cors from "cors";
import apiRouter from './api/routes/api.route';
import {NextFunction, Request, Response} from "express";

class App {
  public app

  constructor () {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
        next();
    });
    this.mountRoutes();
  }

  private mountRoutes (): void {
    this.app.use('/', apiRouter);
  }
}

export default new App().app