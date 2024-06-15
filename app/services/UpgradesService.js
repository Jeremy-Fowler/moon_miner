import { AppState } from "../AppState.js"

class UpgradesService {
  purchaseUpgrade(upgradeName) {
    const upgrade = [...AppState.autoUpgrades, ...AppState.clickUpgrades].find(upgrade => upgrade.name == upgradeName)

    if (!upgrade) throw new Error(`Invalid upgrade name: ${upgradeName}`)
    if (upgrade.price > AppState.cheese) throw new Error(`${upgrade.name} costs ${upgrade.price}, you only have ${AppState.cheese}`)

    AppState.cheese -= upgrade.price
    upgrade.quantity++
    upgrade.price = Math.floor(upgrade.price * 1.2)
    AppState.emit(upgrade.type + 'Upgrades')
  }
}

export const upgradesService = new UpgradesService()