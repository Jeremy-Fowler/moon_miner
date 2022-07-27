import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  cheese = 0

  mouses = [
    { name: 'big mouse', age: 3 },
    { name: 'lil mouse', age: 3 },
    { name: 'mid-sized mouse', age: 3 }
  ]
  upgrades = {
    knife: {
      price: 10,
      quantity: 0,
      multiplier: 1,
      type: 'click'
    },
    drill: {
      price: 50,
      quantity: 0,
      multiplier: 5,
      type: 'click'
    },
    mouse: {
      price: 100,
      quantity: 0,
      multiplier: 3,
      type: 'auto'
    },
    station: {
      price: 500,
      quantity: 0,
      multiplier: 10,
      type: 'auto'
    },
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
