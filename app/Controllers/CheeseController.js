import { ProxyState } from "../AppState.js";
import { cheeseService } from "../Services/CheeseService.js";

function _draw() {
  // @ts-ignore
  document.getElementById('cheese').innerText = ProxyState.cheese
}

export class CheeseController {
  constructor () {
    ProxyState.on('cheese', _draw)
    _draw()
  }

  mine() {
    cheeseService.mine()
  }
}