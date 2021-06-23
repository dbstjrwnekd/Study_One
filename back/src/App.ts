import "reflect-metadata";
import * as express from 'express';
import { createConnection } from "typeorm";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.db();
    this.router();
  }

  private router(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Study_One Start');
    });
  }

  private db(): void {
    createConnection().then(() => {
        console.log("database connected..");
    });
  }
}

export default App;