
export default class Drink {
    constructor(data) {
        debugger
        this.id = data.idDrink;
        this.name = data.strDrink;
        this.ingredients=[];
        this.amounts=[];
        this.directions=data.strInstructions;
        this.thumb=data.strDrinkThumb;
        this.favorite=false;
    }

    setFavorite(bool){
        this.favorite=bool;
    }
    get Template() {
        let template =/*html*/
        `
        <div class="card bg-secondary text-white" style="width:50vw;">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <img src="${this.thumb}" class="card-img" alt="No picture available">
        <p class="card-text">Ingredients: <span id="ingredients">${this.dispIng()}</span></p>
        <p>${this.directions}</p>
        ${this.getFavButton()}
        </div>
        </div>
        `
        return template
    }
    //display ingredients. creates new array from the two different arrays full of ingredients and amount of those ingredients and handles logical problems such as there not being an amount of an ingredient
    dispIng(){
        let combine=[];
        for(let i=0;i<this.amounts.length;i++){
            if(i!=this.amounts.length-1){
            combine[i]=(this.amounts[i]+" "+this.ingredients[i]);
            }else if(this.ingredients.length<this.amounts.length){
                
                for(let j=0;j<(this.ingredients.length-this.amounts.length);j++){
                    
                    combine.push(this.ingredients[this.ingredients.length-j])
                }
            }
        }
        let niceIngredients =combine.join(", ");
        return niceIngredients;
    }

    getFavButton(){
        if(this.favorite){
            return`<button class="btn btn-warning" onclick="app.drinksController.rmFav(${this.id})">Remove Favorites</button>`;
        }
        return`<button class="btn btn-success" onclick="app.drinksController.addFav(${this.id})">Add Drink to Favorites</button>`;
    }
}