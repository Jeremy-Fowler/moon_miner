import { Upgrade } from './models/Upgrade.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cheese = 100000
  /** @type {Upgrade[]} */
  clickUpgrades = [
    new Upgrade('knife', 1, 50, 'click'),
    new Upgrade('drill', 5, 250, 'click'),
  ]
  /** @type {Upgrade[]} */
  autoUpgrades = [
    new Upgrade('mousetronaut', 10, 1000, 'auto'),
    new Upgrade('space station', 100, 50000, 'auto'),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())