import { Component} from '@angular/core';
import { Constants } from './shareFolder/constants.utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  isRecipe: boolean = true;
  isShopping: boolean;
  constants: Constants;
   constructor(){
    this.constants = new Constants;
   }

  isRecipes(section: string){
    section = section.toLowerCase();
    switch(section){
      case this.constants.RECIPES:
        this.isRecipe = true;
        this.isShopping = false;
        break;
      case this.constants.SHOPPING:
        this.isRecipe = false;
        this.isShopping = true;
        break;
    }
  }


 
}
