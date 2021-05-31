import express from 'express';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.router();
  }

  private router(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Study_One Start');
    });
  }
}

export default App;