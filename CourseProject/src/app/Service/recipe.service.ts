import { EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shareFolder/ingredients.model";

export class RecipeService{

recipeEmitter = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
          'Banan Split',
          'semplice e gustose banane fatte a crema',
          'https://www.my-personaltrainer.it/2020/04/08/proprieta-banane-orig.jpeg',[new Ingredients('Banana', 10), new Ingredients('Panna', 20)]
        ),
        new Recipe(
          'Lasagna',
          'gustosa lasagna con sugo',
          'https://www.antoniettapolcaro.it/wp-content/uploads/2022/02/Lasagna-alla-napoletana_2022-scaled.jpg',
          [new Ingredients('Pasta', 10), new Ingredients('Sugo', 20)]
        ),
      ];

    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
    }

    deleteRecipe(removeRecipe: Recipe){
        this.recipes.splice(this.recipes.indexOf(removeRecipe), 1);
    }

    editRecipe(id: number, updatedRecipe: Recipe){
        this.recipes[id] = updatedRecipe;
    }

   


}