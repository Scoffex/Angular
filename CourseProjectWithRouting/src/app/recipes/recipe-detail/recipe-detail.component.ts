import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ShoppingService } from 'src/app/Service/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
 recipeSelected: Recipe;
  id: number;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.renderError(this.id);
    })

    this.activateRoute.data.subscribe((data: Data) => {
      this.recipeSelected = data['recipe'];
      this.renderError(this.recipeSelected);
    })
  }

  constructor(private recipeService: RecipeService, private shopService: ShoppingService, private activateRoute: ActivatedRoute, private router: Router) {
    
  }

  sentDataToShoppingList() {
    this.recipeSelected.ingredients.forEach(singleIngredient => this.shopService.addIngredient(singleIngredient));
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeSelected);
  }

  addNewRecipe() {
    this.recipeService.addRecipe(this.recipeSelected);
  }

  editRecipe() {
   this.router.navigate(['../../', 'edit', this.id], {relativeTo: this.activateRoute})
  }

  renderError(parameter: any){
    if(parameter == undefined){
      this.router.navigate(['/not-exist'])
    }
  }
}
