import { PokeListController } from "./Controllers/PokeListController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  ///valuesController = new ValuesController();
  pokeListController = new PokeListController();

}

window["app"] = new App();
