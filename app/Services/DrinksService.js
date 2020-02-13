import store from "../store.js";
import Drink from "../Models/Drink.js";

//@ts-ignore
let _drinkApi = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  timeout:5000
});
class DrinksService {
  getNewDrink(){
    let res = _drinkApi.get("").then(d=>{
     let tempDrink= d.data.drinks[0];
      if(tempDrink.strIngredient6==null){
      res = new Drink(tempDrink);//create new Drink object if it's simple enough
      
      if(tempDrink.strIngredient1!=null){
        res.ingredients.push(tempDrink.strIngredient1)
        if(tempDrink.strMeasure1!=null){
          res.amounts.push(tempDrink.strMeasure1)
        }

        if(tempDrink.strIngredient2!=null){
          res.ingredients.push(tempDrink.strIngredient2)
          if(tempDrink.strMeasure2!=null){
            res.amounts.push(tempDrink.strMeasure2)
          }

          if(tempDrink.strIngredient3!=null){
            res.ingredients.push(tempDrink.strIngredient3)
            if(tempDrink.strMeasure3!=null){
              res.amounts.push(tempDrink.strMeasure3)
            }

            if(tempDrink.strIngredient4!=null){
              res.ingredients.push(tempDrink.strIngredient4)
              if(tempDrink.strMeasure4!=null){
                res.amounts.push(tempDrink.strMeasure4)
              }

              if(tempDrink.strIngredient5!=null){
                res.ingredients.push(tempDrink.strIngredient5)
                if(tempDrink.strMeasure5!=null){
                  res.amounts.push(tempDrink.strMeasure5)
                }
              }
            }
          }
        }
      }
       store.commit("activeDrink", res);
    }else{this.getNewDrink()}
    }).catch(error=>console.error(error))
  
  }
    
  rmFav(){
    //remove from list of favorites, look into server options instead of local storage
    let res = prompt("Are you sure you'd like to remove this drink from your favorites?")
    if(res){
    store.State.myDrinks.filter(d=>d.id==store.State.activeDrink[0].id)
    store.commit("myDrinks",store.State.myDrinks);
  }
  }
  addFav(id){

    //add to list of favorites, look into server options instead of local storage
  }
}

const service = new DrinksService();
export default service;
