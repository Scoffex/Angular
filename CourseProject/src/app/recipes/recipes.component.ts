import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../Service/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit{
  
  infoText: string = 'Select a item! ';
  name: string;
  isUndefined: boolean = true;
  recipeToPass: Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeEmitter.subscribe((recipe: Recipe) => {
      this.recipeToPass = recipe;
    });
    console.log(this.recipeToPass);
  }
  

  
}
