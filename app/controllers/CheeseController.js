import { AppState } from "../AppState.js";
import { cheeseService } from "../services/CheeseService.js";

export class CheeseController {
  constructor() {
    AppState.on('cheese', this.#drawCheese)
    this.#drawCheese()
  }

  #drawCheese() {
    document.getElementById('cheese').querySelector('span').innerHTML = AppState.cheese.toString()
  }

  mineCheese() {
    cheeseService.mineCheese()
  }
}