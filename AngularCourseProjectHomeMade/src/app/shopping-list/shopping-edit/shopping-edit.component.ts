import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ContentChild,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/service/shopping.service';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  formShopping: FormGroup;
  isValid: boolean;
  subscription: Subscription;
  index: number = -1;
  @ViewChild('nameRef') name: ElementRef;
  @ViewChild('amountRef') amount: ElementRef;
  addUpdateButton: string = 'Add';
  editMode: boolean = false;
  constructor(private shopService: ShoppingService) {}

  ngOnInit(): void {

    this.formShopping = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    });

    this.shopService.index.subscribe((index: number) => {
      this.index = index;
      this.addUpdateButton = 'Update';
      this.editMode = true;
      let ingredient = this.shopService.getIngredientByid(index);
      this.formShopping.patchValue({
        name: ingredient.name,
        amount: ingredient.amount,
      });
    });
    this.isValid = this.formShopping.valid;
  }

  addElementOnShoppingList() {
    let ingredient = this.createIngredient();
    if (this.editMode) {
      this.shopService.editIngredient(ingredient, this.index);
    } else {
      this.shopService.addIngredient(ingredient);
    }
    this.resetForm();
  }

  removeElementOnShoppingList() {
    this.shopService.removeIngredient(this.index);
    this.resetForm();
  }

  createIngredient() {
    return new Ingredients(
      this.formShopping.get('name').value,
      this.formShopping.get('amount').value
    );
  }

  resetForm(){
    this.formShopping.reset();
    this.addUpdateButton = 'Add';
  }
}
