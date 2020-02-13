import DrinksController from "./Controllers/DrinksController.js";

class App {
  drinksController = new DrinksController();
}

window["app"] = new App();
