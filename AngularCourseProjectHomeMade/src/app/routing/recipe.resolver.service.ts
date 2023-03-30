import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { HttpClientService } from '../service/http.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(
    private recipeHttp: HttpClientService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe | Observable<Recipe> | Promise<Recipe> {
    return this.recipeHttp.getById().pipe(
      map((dataReturned) => {
        let recipeArr: Recipe[] = [];
        Object.keys(dataReturned.body).forEach((key) => {
          dataReturned.body[key].forEach((recipe: Recipe) => {
            recipeArr.push(recipe);
          });
        });
        console.log(route.params['id'])
        return recipeArr[route.params['id']];
      })
    );
  }
}
