import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../Service/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy{
  recipeSubscription: Subscription;
  infoText: string = 'Select a item! ';
  name: string;
  isUndefined: boolean = true;
  recipeToPass: Recipe;

  constructor(private recipeService: RecipeService){}
  

  ngOnInit(): void {
   
  }
  

  ngOnDestroy(): void {
   
  }
  
}

