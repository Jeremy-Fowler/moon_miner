import { ProxyState } from "../AppState.js";
import { cheeseService } from "../Services/CheeseService.js";

function _draw() {
  // @ts-ignore
  document.getElementById('cheese-total').innerText = ProxyState.cheese
}

export class CheeseController {
  constructor () {
  }

  mine() {
    cheeseService.mine()
    _draw()
  }
}