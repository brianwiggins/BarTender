import DrinksService from "../Services/DrinksService.js";
import store from "../store.js";

//Private
function _draw() {
  let myDrinks = store.State.myDrinks;
  let template = "";
  myDrinks.forEach(d=>{
    template+=`<li onclick="app.drinksController.getDrinkById('${d.id}')">${d.name}</li>`
  })
  document.getElementById("my-drinks").innerHTML=template;
}

function _drawActiveDrink(){
if(store.State.activeDrink){
document.getElementById("active-drink").innerHTML=store.State.activeDrink.Template;
}else{
  document.getElementById("active-drink").innerHTML="";
}
}

//Public
export default class DrinksController {
  constructor() {
    DrinksService.getNewDrink();
    store.subscribe("activeDrink", _drawActiveDrink);
    store.subscribe("myDrinks", _draw);
    console.log(store.State.activeDrink);
  }
getDrinkById(id){
DrinksService.getDrinkbyId(id);
}
  
}
