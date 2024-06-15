import { AppState } from "../AppState.js";
import { Upgrade } from "../models/Upgrade.js";
import { upgradesService } from "../services/UpgradesService.js";
import { setHTML } from "../utils/Writer.js";

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
    setHTML('autoUpgrades', AppState.autoUpgrades.map(upgrade => upgrade.purchaseButtonHTMLTemplate).join(''))
    setHTML('autoStats', AppState.autoUpgrades.map(upgrade => upgrade.statsHTMLTemplate).join(''))
    document.querySelector('#autoPower span').innerHTML = '+' + Upgrade.calculateUpgradesPower('auto')
  }
  #drawClickUpgrades() {
    setHTML('clickUpgrades', AppState.clickUpgrades.map(upgrade => upgrade.purchaseButtonHTMLTemplate).join(''))
    setHTML('clickStats', AppState.clickUpgrades.map(upgrade => upgrade.statsHTMLTemplate).join(''))
    document.querySelector('#clickPower span').innerHTML = '+' + Upgrade.calculateUpgradesPower('click')
  }

  purchaseUpgrade(upgradeName, upgradeType) {
    upgradesService.purchaseUpgrade(upgradeName, upgradeType)
  }
}