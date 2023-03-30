import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { HttpClientService } from "../service/http.service";

@Injectable()
export class RecipeResolverHttp implements Resolve<any>{

    constructor(private recipeHttpClient: HttpClientService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.recipeHttpClient.getAll();
    }

}