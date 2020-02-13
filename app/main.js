import DrinksController from "./Controllers/DrinksController.js";

class App {
constructor(){
  this.drinksController=new DrinksController();
}
}

window["app"] = new App();
