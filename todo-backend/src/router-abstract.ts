import {Router} from 'express';

export default abstract class RouterBase {
  protected router: Router;
  
  get route(): Router {
    return this.router;
  }
  
  constructor() {
    this.router = Router();
  }
}
