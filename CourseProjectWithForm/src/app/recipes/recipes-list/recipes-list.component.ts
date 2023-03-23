import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/Service/recipe.service';
import { Constants } from 'src/app/shareFolder/constants.utils';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(){
    this.recipes = this.recipeService.recipes;
  }

  showInputFormMethod() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }
}
