import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
infoText: string = "Select a item! ";

setRecipeSelected(recipe: Recipe) {
 
  this.recipeSelected = recipe;
}
  recipeSelected: Recipe;
  
  checkIfIsEmpty(){
    if(this.recipeSelected != undefined){
        this.infoText = ""
        return true;
    }
    return false;
  }
}
