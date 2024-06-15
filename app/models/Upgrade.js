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
      <p class="fs-5 text-capitalize">
        ${this.name} <br> +${this.multiplier} ${this.type == 'auto' ? '/ 3s' : ''}
      </p>
    </div>
    `
  }

  get statsHTMLTemplate() {
    return `
    <div class="d-flex justify-content-between align-items-center" 
    title="You have ${this.quantity} ${this.name} ${this.quantity == 1 ? 'upgrade' : 'upgrades'}, which adds ${this.totalPower} cheese ${this.type == 'click' ? 'every time you click the moon' : 'every 3 seconds'}">
      <p>
        <span class="upgradeNumber me-2">${this.quantity}</span>
        <span class="text-capitalize">${this.name}</span>
      </p>
      <p>
        <i class="mdi mdi-arrow-right-thick"></i>
        <span class="upgradeNumber ms-2">${this.totalPower}</span>
      </p>
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
    return AppState[type + 'Upgrades'].reduce((previousPower, currentUpgrade) => previousPower + currentUpgrade.totalPower, 0) + (type == 'click' ? 1 : 0)
  }
}
