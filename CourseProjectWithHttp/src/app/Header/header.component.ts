import { HttpClientModule } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RecipeHttpClient } from "../Service/recipe.http.service";

@Component({
    selector: 'app-Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 
    constructor (private recipeHttpClient: RecipeHttpClient){

    }

    saveRecipes(){
        this.recipeHttpClient.saveAll();
    }

    getAllRecipes(){
        this.recipeHttpClient.getAll();
    }



}