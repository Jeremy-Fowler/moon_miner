import { AppState } from "../AppState.js"
import { Upgrade } from "../models/Upgrade.js"

class CheeseService {
  constructor() {
    setInterval(this.#collectAuto, 3000)
  }
  mineCheese() {
    AppState.cheese += Upgrade.calculateUpgradesPower('click')
  }

  #collectAuto() {
    AppState.cheese += Upgrade.calculateUpgradesPower('auto')
  }
}

export const cheeseService = new CheeseService()