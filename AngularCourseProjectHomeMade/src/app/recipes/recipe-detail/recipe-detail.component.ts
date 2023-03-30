import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http.service';
import { RecipeService } from 'src/app/service/recipe.service';
import { ShoppingService } from 'src/app/service/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  id: number;
  @Input() 
  ngOnInit(): void {

  /*   this.recipeSelected = this.activateRoute.snapshot.data['recipe'];
    this.renderError(this.recipeSelected);
    this.id = this.activateRoute.snapshot.params['id']; */


    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipeSelected = this.recipeService.getRecipeById(params['id']);
      this.renderError(this.recipeSelected);
    }) 

    
  }

  constructor(private recipeService: RecipeService, private shopService: ShoppingService, private activateRoute: ActivatedRoute, private router: Router, private httpClient: HttpClientService) {
    
  }


  sentDataToShoppingList() {
    this.recipeSelected.ingredients.forEach(singleIngredient => this.shopService.addIngredient(singleIngredient));
    this.router.navigate(['shopping-list'])
  }

  deleteRecipe() {
    this.httpClient.deleteRecipeById(this.id);
    this.router.navigate(['../../'], {relativeTo: this.activateRoute})
  }

  addNewRecipe() {
    this.recipeService.addRecipe(this.recipeSelected);
  }

  editRecipe() {
   this.recipeService.emitRecipeIndex(this.id);
   this.router.navigate(['../../', 'edit', this.id], {relativeTo: this.activateRoute})
  }

  renderError(recipe: Recipe){

    if(recipe == undefined){
      this.router.navigate(['/not-exist'])
    }
  }
}

