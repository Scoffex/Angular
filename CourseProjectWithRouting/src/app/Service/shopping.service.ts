import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shareFolder/ingredients.model';

export class ShoppingService {



 ingredientSubject = new Subject<Ingredients[]>();

  private ingredientsArr: Ingredients[] = [
    new Ingredients('banana', 10),
    new Ingredients('arancia', 25),
  ];

  addIngredient(ingredient: Ingredients){
    this.ingredientsArr.push(ingredient);
    this.emitIngredients();
  }

  removeIngredient(ingredient: Ingredients){
    this.ingredientsArr.splice(this.ingredientsArr.indexOf(ingredient), 1);
    this.emitIngredients();
  }

  getIngredients(){
    return this.ingredientsArr.slice();
  }


  emitIngredients(){
    this.ingredientSubject.next(this.ingredientsArr);
  }
}
