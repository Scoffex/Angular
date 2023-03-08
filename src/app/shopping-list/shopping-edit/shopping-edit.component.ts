import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ContentChild, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
import { ShoppingListComponent } from '../shopping-list.component';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  

  @Input('ingredientsArrInput') ingredientsArr: Ingredients[];
  @Input('singleIngredient') ingredientValue: Ingredients;
  @ViewChild('nameRef') name: ElementRef;
  @ViewChild('amountRef') amount: ElementRef;
  //@ContentChild('amiciPostale') namee: ElementRef;
  @Output() variableUpdated = new EventEmitter<string>();
  nameOfIngredients: string;
  amountOfIngredients: number;

  ngOnInit(): void {
   if(this.ingredientValue != undefined){
    this.name.nativeElement.value = this.ingredientValue.name;
    this.amount.nativeElement.value = this.ingredientValue.amount;
   }
  }

  addElementOnShoppingList() {
    this.nameOfIngredients = this.name.nativeElement.value;
    this.amountOfIngredients = this.amount.nativeElement.value;
    this.ingredientsArr.push(new Ingredients(this.nameOfIngredients, this.amountOfIngredients));
    console.log(this.ingredientsArr.length);
  }

  removeElementOnShoppingList() {
    let index: number = this.ingredientsArr.indexOf(new Ingredients(this.nameOfIngredients, this.amountOfIngredients));
    this.ingredientsArr.splice(index, 1);
    console.log(this.ingredientsArr);
  }

  resetProperty() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

}
