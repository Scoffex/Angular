import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shareFolder/ingredients.model";

@Injectable()
export class RecipeService{

recipeSubjectArr = new Subject<Recipe[]>();
recipeSubject = new Subject<Recipe>();
recipeIndex = new Subject<number>();
idOfRecipeArr: string;
   /*  recipes: Recipe[] = [
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
 */

      recipes: Recipe[] = [
      ];

    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);   
    }
    
    setRecipe(arr: Recipe[]){
      this.recipes.splice(0, arr.length);
      this.recipes.push(...arr);
    }

    setIdOfRecipeArr(id: string){
      this.idOfRecipeArr = id;
    }
    
    deleteRecipe(removeRecipe: Recipe){
        this.recipes.splice(this.recipes.indexOf(removeRecipe), 1);
    }

    emitRecipeArr(){
      this.recipeSubjectArr.next(this.recipes);
    }

    emitRecipe(recipe: Recipe){
      this.recipeSubject.next(recipe);
    }

 

    emitRecipeIndex(index: number){
      this.recipeIndex.next(index);
    }

    getRecipe(id: number){
      return this.recipes[id];
    }

    getAllRecipe(){
      return this.recipes;
    }

    getIndexOfRecipe(recipe: Recipe){
      return this.recipes.indexOf(recipe);
    }
   
    getRecipeById(index: number){
      return this.recipes[index];
    }

    editRecipe(index: number, recipe: Recipe){
      let id: string = this.recipes[index].id
      recipe.id = id;
      this.recipes.splice(index, 1, recipe);
    }

 

}