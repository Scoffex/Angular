import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { of } from 'rxjs';
import { ShoppingService } from './shopping.service';
import { Ingredients } from '../shareFolder/ingredients.model';
import { Route, Router } from '@angular/router';

@Injectable()
export class HttpClientService {
  constructor(
    private recipeService: RecipeService,
    private httpClient: HttpClient,
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  saveAll() {
    this.httpClient
      .delete(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe({
        next: () => {
          this.httpClient
            .post(
              'https://angularexercise-f928b-default-rtdb.firebaseio.com/recipes.json',
              this.recipeService.getAllRecipe()
            )
            .subscribe({
              next: (data) => console.log('DATA SAVED CORRECTLY ', data),
              error: (error) => console.log('ERROR INCOMING IN POST: ' + error),
            });
        },
        error: (error) => console.log('ERROR INCOMING IN POST: ' + error),
      });
  }

  getAll() {
    return this.httpClient
      .get(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/recipes.json',
        { observe: 'response' }
      )
      .pipe(
        map((dataReturned) => {
          console.log(dataReturned.body)
          if(dataReturned.body != null){
          Object.keys(dataReturned.body).forEach((key) => {
            console.log(dataReturned.body)
            console.log(dataReturned.body[key]);
            this.recipeService.setRecipe( dataReturned.body[key]);
            this.recipeService.setIdOfRecipeArr(key);
            /* dataReturned.body[key].forEach((recipe: Recipe) => {
                recipeArr.push(recipe);
                
            }); */
            
          });
        } 
        }))
      
  }

  deleteRecipeById(index: number){
   let url = `https://angularexercise-f928b-default-rtdb.firebaseio.com/recipes/${this.recipeService.idOfRecipeArr}/${index}.json`; 
   console.log(url);
   this.httpClient.delete(url).subscribe({
    next: () => {this.router.navigate(['/recipes'])},
    error: (err) => console.log('ERROR INCOMING: ' + err)
   })

  }

  getById(){
    return this.httpClient
      .get(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/recipes.json',
        { observe: 'response' }
      )
  }

  saveAllShopping(){

    return this.httpClient.post('https://angularexercise-f928b-default-rtdb.firebaseio.com/shopping_list.json', this.shoppingService.getIngredients()).subscribe({
      next: (data) => console.log('Shopping list are saved: ' + data),
      error: (error) => console.log('Error incoming in post method: ' + error),
    })

    
  }

  getAllShoppingList() {
    return this.httpClient
      .get(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/shopping_list.json',
        { observe: 'response' }
      )
      .pipe(
        map((dataReturned) => {
            let shoppingList: Ingredients[] = [];
          Object.keys(dataReturned.body).forEach((key) => {
            dataReturned.body[key].forEach((ingredient: Ingredients) => {
              shoppingList.push(ingredient);
            });
          });
          return shoppingList;
        })).subscribe({
          next: (recipeArr) => {
            this.shoppingService.setIngredient(recipeArr)},
        })
      }
      
}
