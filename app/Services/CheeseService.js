import { ProxyState } from "../AppState.js"
import { upgradesService } from "./UpgradesService.js"

class CheeseService {
  mine() {
    ProxyState.cheese++
    ProxyState.cheese += upgradesService.getPower('click')
  }

}

export const cheeseService = new CheeseService()