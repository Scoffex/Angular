import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ContentChild, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/Service/shopping.service';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  


  @ViewChild('nameRef') name: ElementRef;
  @ViewChild('amountRef') amount: ElementRef;

  constructor(private shopService: ShoppingService){

  }
  ngOnInit(): void {
  
  }

  addElementOnShoppingList() {

   this.shopService.addIngredient(this.createIngredient());
   this.resetProperty();
    
  }

  removeElementOnShoppingList() {
    this.shopService.removeIngredient(this.createIngredient());
    this.resetProperty();

  }


  createIngredient(){
    return new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value);
    
   }
 

  resetProperty() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

}
