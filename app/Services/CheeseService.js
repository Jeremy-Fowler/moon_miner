import { ProxyState } from "../AppState.js"

class CheeseService {
  mine() {
    ProxyState.cheese++
    console.log(ProxyState.cheese);
  }

}

export const cheeseService = new CheeseService()