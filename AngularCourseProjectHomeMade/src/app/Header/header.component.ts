import { HttpClientModule } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HttpClientService } from "../service/http.service";

@Component({
    selector: 'app-Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    sectionSelected: string = '';
    constructor (private recipeHttpClient: HttpClientService){

    }

    saveRecipe_Shopping(){
        switch(this.sectionSelected){
            case 'recipe':
                this.saveRecipes();
                break;
            case 'shopping':
                
        }
    }
    saveRecipes(){
        this.recipeHttpClient.saveAll();
    }

    getAllRecipes(){
        this.recipeHttpClient.getAll();
    }



}