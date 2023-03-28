import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeHttpClient } from "../Service/recipe.http.service";

@Injectable()
export class RecipeResolverHttp implements Resolve<any>{

    constructor(private recipeHttpClient: RecipeHttpClient) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.recipeHttpClient.getAll();
    }

}