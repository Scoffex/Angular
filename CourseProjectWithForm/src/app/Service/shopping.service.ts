import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shareFolder/ingredients.model';

export class ShoppingService {
  ingredientSubject = new Subject<Ingredients[]>();
  index = new Subject<number>();

  private ingredientsArr: Ingredients[] = [
    new Ingredients('banana', 10),
    new Ingredients('arancia', 25),
  ];

    addIngredient(ingredient: Ingredients) {
      const index = this.ingredientsArr.findIndex(x => x.name.toLowerCase() === ingredient.name.toLowerCase());
      index === -1 ? this.ingredientsArr.push(ingredient) :  this.ingredientsArr[index].amount += ingredient.amount;
      this.emitIngredients();
     
    
    }

  removeIngredient(index: number) {
    console.log(index);
    if (index !== -1) {
      this.ingredientsArr.splice(index, 1);
      this.emitIngredients();
    }
  }

  getIngredients() {
    return this.ingredientsArr.slice();
  }

  getIngredientByid(index: number) {
    return this.ingredientsArr[index];
  }

  getIndexOfIngredient(ingredient: Ingredients) {
    let i = this.ingredientsArr.indexOf(ingredient);
    console.log(i);
  }

  editIngredient(ingredient: Ingredients, index: number) {
    this.ingredientsArr.splice(index, 1, ingredient);
    this.emitIngredients();
  }

  emitIngredients() {
    this.ingredientSubject.next(this.ingredientsArr);
  }

  emitIndex(id: number) {
    this.index.next(id);
  }
}
