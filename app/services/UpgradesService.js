import { AppState } from "../AppState.js"

class UpgradesService {
  purchaseUpgrade(upgradeName, upgradeType) {
    const upgradeArray = AppState[upgradeType + 'Upgrades']
    if (!upgradeArray) return

    const upgrade = upgradeArray.find(upgrade => upgrade.name == upgradeName)
    if (!upgrade) return

    if (upgrade.price > AppState.cheese) return

    AppState.cheese -= upgrade.price
    upgrade.quantity++
    upgrade.price = Math.floor(upgrade.price * 1.2)
    AppState.emit(upgrade.type + 'Upgrades')
  }
}

export const upgradesService = new UpgradesService()