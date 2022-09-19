import { appState } from "../AppState.js"
import { pokeListService } from "../Services/PokeListService.js"
import { setHTML } from "../Utils/Writer.js"


function drawPokeList() {
  let template = ''
  appState.pokeList.forEach(p => template += p.pokeListTemplate)
  setHTML('pokelist', template)
}
export class PokeListController {

  constructor() {
    appState.on('pokeList', drawPokeList)
    this.getPokeList()
  }

  async getPokeList() {
    try {
      await pokeListService.getPokeList()

    } catch (error) {
      console.log('[getPokemon]', error)
    }
  }
}