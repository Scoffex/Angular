import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] = [];
  
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}


  ngOnInit(){
    this.recipes = this.recipeService.getAllRecipe();
  }

  showInputFormMethod() {
    console.log("stai cliccando")
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }


}
