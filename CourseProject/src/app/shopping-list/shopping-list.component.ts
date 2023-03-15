import { Component, OnInit, ViewChild} from '@angular/core';
import { ShoppingService } from '../Service/shopping.service';
import { Ingredients } from '../shareFolder/ingredients.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  @ViewChild(ShoppingEditComponent) shoppingEdit: ShoppingEditComponent;

  ingredientsArr: Ingredients[]  = [];

  constructor(private shopService: ShoppingService){ 
    
   }

  ngOnInit(): void {
    this.ingredientsArr = this.shopService.getIngredients();
    
   
    this.shopService.ingredientrEmitter.subscribe((ingredients: Ingredients[]) =>{
      this.ingredientsArr = ingredients;
    })
    console.log("ARRAY POST AGGIUNTA", this.ingredientsArr);
  }
  
  passTheIngredients(singleIngredient: Ingredients){
   this.shoppingEdit.name.nativeElement.value = singleIngredient.name;
   this.shoppingEdit.amount.nativeElement.value = singleIngredient.amount;
  }
  
}
