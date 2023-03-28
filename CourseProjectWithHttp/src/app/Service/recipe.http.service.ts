import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { of } from 'rxjs';

@Injectable()
export class RecipeHttpClient {
  constructor(
    private recipeService: RecipeService,
    private httpClient: HttpClient
  ) {}

  saveAll() {
    this.httpClient
      .delete(
        'https://angularapp-c4870-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe({
        next: () => {
          this.httpClient
            .post(
              'https://angularapp-c4870-default-rtdb.firebaseio.com/recipes.json',
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
        'https://angularapp-c4870-default-rtdb.firebaseio.com/recipes.json',
        { observe: 'response' }
      )
      .pipe(
        map((dataReturned) => {
            let recipeArr: Recipe[] = [];
          Object.keys(dataReturned.body).forEach((key) => {
            dataReturned.body[key].forEach((recipe: Recipe) => {
                recipeArr.push(recipe);
            });
          });
          return recipeArr;
        })).subscribe({
          next: (recipeArr) => {
            this.recipeService.setRecipe(recipeArr)},
        })
      
  }

  getById(){
    return this.httpClient
      .get(
        'https://angularapp-c4870-default-rtdb.firebaseio.com/recipes.json',
        { observe: 'response' }
      )
  }
}
