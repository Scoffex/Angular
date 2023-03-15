import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ShoppingService } from 'src/app/Service/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected: Recipe;


  ngOnInit(): void {
    
  }

  constructor(private recipeService: RecipeService, private shopService: ShoppingService) {}

  sentDataToShoppingList() {
    this.shopService.emitIngredients(this.recipeSelected.ingredients);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeSelected);
  }

  addNewRecipe() {
    this.recipeService.addRecipe(this.recipeSelected);
  }

  editRecipe() {
    let id: number = this.recipeService.recipes.indexOf(this.recipeSelected);
  }
}
