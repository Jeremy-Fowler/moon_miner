import { ProxyState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";

function _draw() {
  for (const key in ProxyState.upgrades) {
    let upgrade = ProxyState.upgrades[key]
    // @ts-ignore
    document.getElementById(key + '-price').innerText = upgrade.price
  }
}

export class UpgradesController {
  constructor () {
    _draw()
  }

  buyUpgrade(key) {
    upgradesService.buyUpgrade(key)
    _draw()
    // @ts-ignore
    document.getElementById('cheese-total').innerText = ProxyState.cheese
  }

  findMouse(name) {
    upgradesService.findMouse(name)
    upgradesService.lookGuys()
  }
}