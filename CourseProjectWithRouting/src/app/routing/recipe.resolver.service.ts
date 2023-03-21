import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../Service/recipe.service";

@Injectable()
export class RecipeResolver implements Resolve<Recipe>{

    constructor(private recipeService: RecipeService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        console.log(route.params);
        return this.recipeService.getRecipe(Number(route.params['id']-1))
    }
}