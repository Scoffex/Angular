import { EventEmitter, OnInit } from '@angular/core';
import { Ingredients } from '../shareFolder/ingredients.model';

export class ShoppingService {



 ingredientrEmitter = new EventEmitter<Ingredients[]>();

  private ingredientsArr: Ingredients[] = [
    new Ingredients('banana', 10),
    new Ingredients('arancia', 25),
  ];

  addIngredient(ingredient: Ingredients){
    this.ingredientsArr.push(ingredient);
  }

  removeIngredient(ingredient: Ingredients){
    this.ingredientsArr.splice(this.ingredientsArr.indexOf(ingredient), 1);
  }

  getIngredients(){
    return this.ingredientsArr.slice();
  }


  emitIngredients(ingredients: Ingredients[]){
    this.ingredientsArr.push(...ingredients);
  //  ingredients.forEach(x => this.ingredientsArr.push(x))
    this.ingredientrEmitter.emit(this.ingredientsArr);
  }
}
