import { ProxyState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";

function _draw() {
  let upgrades = ProxyState.upgrades
  for (const key in upgrades) {
    let upgrade = upgrades[key]
    // @ts-ignore
    document.getElementById(key + '-quantity').innerText = upgrade.quantity
    // @ts-ignore
    document.getElementById(key + '-power').innerText = upgrade.quantity * upgrade.multiplier
    // @ts-ignore
    document.getElementById(key + '-price').innerText = upgrade.price
    // @ts-ignore
    document.getElementById('click-power').innerText = upgradesService.getPower('click') + 1
    // @ts-ignore
    document.getElementById('auto-power').innerText = upgradesService.getPower('auto')
  }
}


export class UpgradesController {
  constructor () {
    ProxyState.on('upgrades', _draw)
    _draw()
    setInterval(upgradesService.collectAuto.bind(upgradesService), 3000)
  }

  buyUpgrade(key) {
    upgradesService.buyUpgrade(key)
  }
}