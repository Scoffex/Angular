import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../service/shopping.service';
import { Ingredients } from '../shareFolder/ingredients.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  @ViewChild(ShoppingEditComponent) shoppingEdit: ShoppingEditComponent;
  ingredientsArr: Ingredients[]  = [];
  ingredientSubscription: Subscription;

  constructor(private shopService: ShoppingService){
    this.ingredientsArr = this.shopService.getIngredients();
   }
  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredientSubscription = this.shopService.ingredientSubject.subscribe((ingredients: Ingredients[]) =>{
      this.ingredientsArr = ingredients;
    })
   }
  
  passTheIngredients(index: number){
  /*   this.shoppingEdit.addUpdateButton = 'Update';

   this.shoppingEdit.formShopping.patchValue({
    'name': singleIngredient.name,
    'amount': singleIngredient.amount
   }) */

   this.shopService.emitIndex(index);
  }
  
}
