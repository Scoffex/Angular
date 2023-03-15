import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ContentChild, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/Service/shopping.service';
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

  constructor(private shopService: ShoppingService){

  }
  ngOnInit(): void {
   if(this.ingredientValue != undefined){
    this.name.nativeElement.value = this.ingredientValue.name;
    this.amount.nativeElement.value = this.ingredientValue.amount;
   }
  }

  addElementOnShoppingList() {
    this.shopService.addIngredient(this.passTheIngredients());
    
  }

  removeElementOnShoppingList(name: string, numOfIngredients: number) {
    this.shopService.removeIngredient(new Ingredients(name, numOfIngredients));

  }

  passTheIngredients(){
    return new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value);
    
   }
 

  resetProperty() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

}
