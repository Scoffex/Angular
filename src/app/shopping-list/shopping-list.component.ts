import { Component, ViewChild} from '@angular/core';
import { Ingredients } from '../shareFolder/ingredients.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @ViewChild(ShoppingEditComponent) shoppingEdit: ShoppingEditComponent;
  ingredientsArr: Ingredients [] = [new Ingredients('banana', 10), new Ingredients('arancia', 25)];
  nameOfIngredients: string;
  amountOfIngredients: number;
  
  addElementOnShoppingList(name: string, amount: number) {
    this.nameOfIngredients = name;
    this.amountOfIngredients = amount;
    this.ingredientsArr.push(new Ingredients(this.nameOfIngredients, this.amountOfIngredients));
    console.log(this.ingredientsArr.length);
  }

  removeElementOnShoppingList() {
    let index: number = this.ingredientsArr.indexOf(new Ingredients(this.nameOfIngredients, this.amountOfIngredients));
    this.ingredientsArr.splice(index, 1);
    console.log(this.ingredientsArr);
  }

  passTheIngredients(singleIngredient: Ingredients){
   this.shoppingEdit.name.nativeElement.value = singleIngredient.name;
   this.shoppingEdit.amount.nativeElement.value = singleIngredient.amount;
  }
  
}
