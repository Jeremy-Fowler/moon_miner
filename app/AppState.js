import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  cheese = 10000
  upgrades = {
    knife: {
      price: 50,
      multiplier: 1,
      quantity: 0,
      type: 'click'
    },
    drill: {
      price: 250,
      multiplier: 5,
      quantity: 0,
      type: 'click'
    },
    mouse: {
      price: 1000,
      multiplier: 10,
      quantity: 0,
      type: 'auto'
    },
    spaceStation: {
      price: 5000,
      multiplier: 100,
      quantity: 0,
      type: 'auto'
    }
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
