import { appState } from "../AppState.js"
import { PokeList } from "../Models/PokeList.js"
import { PokeServer } from "./AxiosService.js"

class PokeListService {
  constructor() {

  }

  async getPokeList() {
    console.log('bologna')
    const res = await PokeServer.get('/api/v2/pokemon/')
    appState.pokeList = res.data.results.map(p => new PokeList(p))
    console.log(appState.pokeList)
  }
}

export const pokeListService = new PokeListService()