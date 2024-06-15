import { CheeseController } from './controllers/CheeseController.js';
import { UpgradesController } from './controllers/UpgradesController.js';

class App {
  cheeseController = new CheeseController()
  upgradesController = new UpgradesController()
}

const app = new App()
// @ts-ignore
window.app = app
