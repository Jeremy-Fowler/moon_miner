import { CheeseController } from "./Controllers/CheeseController.js";
import { UpgradesController } from "./Controllers/UpgradesController.js";

class App {
  cheeseController = new CheeseController()
  upgradesController = new UpgradesController()
}

window["app"] = new App();
