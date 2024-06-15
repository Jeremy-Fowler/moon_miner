import { AppState } from "../AppState.js"

export class Upgrade {
  /**
 * @param {string} name
 * @param {number} multiplier
 * @param {number} price
 * @param {('click'|'auto')} type
 */
  constructor(name, multiplier, price, type) {
    this.name = name
    this.multiplier = multiplier
    this.price = price
    this.type = type
    this.quantity = 0
  }

  get purchaseButtonHTMLTemplate() {
    return `
    <div class="d-flex gap-3 mb-2">
    <button onclick="app.upgradesController.purchaseUpgrade('${this.name}', '${this.type}')" class="btn btn-${this.type == 'click' ? 'primary' : 'danger'} fs-1" ${AppState.cheese < this.price ? 'disabled' : ''}>
        ${this.price} <i class="mdi mdi-cheese"></i>
      </button>
      <div>
        <p class="fs-5 text-capitalize">
          ${this.name} <br> +${this.multiplier} ${this.type == 'auto' ? '/ 3s' : ''}
        </p>
      </div>
    </div>
    `
  }

  get totalPower() {
    return this.multiplier * this.quantity
  }

  /**
    * @param {('click'|'auto')} type
   */
  static calculateUpgradesPower(type) {
    const upgrades = AppState[type + 'Upgrades']
    return upgrades.reduce((previousPower, currentUpgrade) => previousPower + currentUpgrade.totalPower, 0) + (type == 'click' ? 1 : 0)
  }
}
