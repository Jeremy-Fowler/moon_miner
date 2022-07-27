import { ProxyState } from "../AppState.js"

class UpgradesService {
  lookGuys() {
    throw new Error("Method not implemented.");
  }
  findMouse(name) {
    const mouse = ProxyState.mouses.find(mouse => mouse.name == name)
    console.log(mouse);
  }
  buyUpgrade(key) {
    let upgrade = ProxyState.upgrades[key]
    if (ProxyState.cheese < upgrade.price) {
      window.alert('not enough cheese, homeboy')
    }
    else {
      ProxyState.cheese -= upgrade.price
      upgrade.quantity++
      upgrade.price += 50
    }
  }

}

export const upgradesService = new UpgradesService()