import { AppState } from "../AppState.js";
import { Upgrade } from "../models/Upgrade.js";
import { upgradesService } from "../services/UpgradesService.js";

export class UpgradesController {
  constructor() {
    AppState.on('clickUpgrades', this.#drawClickUpgrades.bind(this))
    AppState.on('autoUpgrades', this.#drawAutoUpgrades.bind(this))
    AppState.on('cheese', this.#drawUpgrades.bind(this))
    this.#drawUpgrades()
  }

  #drawUpgrades() {
    this.#drawAutoUpgrades()
    this.#drawClickUpgrades()
  }
  #drawAutoUpgrades() {
    document.getElementById('autoUpgrades').innerHTML = AppState.autoUpgrades.map(upgrade => upgrade.purchaseButtonHTMLTemplate).join()
    document.querySelector('#autoPower span').innerHTML = '+' + Upgrade.calculateUpgradesPower('auto')
  }
  #drawClickUpgrades() {
    document.getElementById('clickUpgrades').innerHTML = AppState.clickUpgrades.map(upgrade => upgrade.purchaseButtonHTMLTemplate).join()
    document.querySelector('#clickPower span').innerHTML = '+' + Upgrade.calculateUpgradesPower('click')
  }

  purchaseUpgrade(upgradeName) {
    upgradesService.purchaseUpgrade(upgradeName)
  }
}