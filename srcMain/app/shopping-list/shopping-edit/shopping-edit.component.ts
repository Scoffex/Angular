import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ContentChild} from '@angular/core';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
import { ShoppingListComponent } from '../shopping-list.component';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
resetProperty() {
throw new Error('Method not implemented.');
}
  @Input('Array') ingredientsArr: Ingredients [];
  
stampa() {
console.log(this.name);
}


  @ViewChild('nameRef') name: ElementRef;
  @ViewChild('amountRef')  amount: ElementRef;
  @ContentChild('amiciPostale') namee: ElementRef;
  @Output() variableUpdated = new EventEmitter<string>();
  shoppingList: ShoppingListComponent
  constructor(){
    this.shoppingList = new ShoppingListComponent();
}

addElementOnShoppingList() {
  console.log(' ECCO NG NOME :' + this.namee.nativeElement.textContent);
  this.variableUpdated.emit(this.name.nativeElement.value);
  console.log(this.name.nativeElement.value, this.amount.nativeElement.value);
 // this.ingredientsArr.push(new Ingredients(name, amount));
  //console.log(this.shoppingList.ingredientsArr);
}

remobeElementOnShoppingList(){
  let index: number = this.shoppingList.ingredientsArr.indexOf(new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value));
  this.ingredientsArr.splice(index, 1);
  console.log(this.shoppingList.ingredientsArr);
}


  
}
