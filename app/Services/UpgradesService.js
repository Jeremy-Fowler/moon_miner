import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

class UpgradesService {
  buyUpgrade(key) {
    let upgrade = ProxyState.upgrades[key]
    if (upgrade.price > ProxyState.cheese) {
      Pop.toast('Not enough cheese, amigo', 'error')
    }
    else {
      upgrade.quantity++
      ProxyState.cheese -= upgrade.price
      upgrade.price += 100
      console.log('you bought the ' + key);
      ProxyState.upgrades = ProxyState.upgrades
    }
  }

  getPower(type) {
    let total = 0
    for (const key in ProxyState.upgrades) {
      let upgrade = ProxyState.upgrades[key]
      if (upgrade.type == type && upgrade.quantity) {
        total += upgrade.quantity * upgrade.multiplier
      }
    }
    return total
  }

  collectAuto() {
    ProxyState.cheese += this.getPower('auto')
    console.log(ProxyState.cheese);
  }
}

export const upgradesService = new UpgradesService()