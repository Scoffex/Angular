import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';
import { Constants } from 'src/app/shareFolder/constants.utils';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{

  constants: Constants;
  nameOfRecipe: string = "";
  buttonRecipe: string;
  descriptionOfRecipe: string = "";
  imageOfRecipe: string = "";
  recipes: Recipe[] = [];
  showInputForm: boolean;
  isClick: boolean = false;


  constructor(private recipeService: RecipeService) {
    this.constants = new Constants;
    this.buttonRecipe = this.constants.NEW_RECIPE;
    this.showInputForm = false;
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
    console.log(this.recipes.length)
  }

  showInputFormMethod() {
    this.showInputForm = !this.showInputForm;
    if (this.showInputForm) {
      this.isClick = true;
      this.showInputForm = true;
      this.buttonRecipe = this.constants.BACK;
    } else {
      this.isClick = false;
      this.showInputForm = false;
      this.buttonRecipe = this.constants.NEW_RECIPE;
    }
  }
  
  addAtReipes() {
    this.showInputFormMethod();
   // this.recipeService.addRecipe(new Recipe(this.nameOfRecipe, this.descriptionOfRecipe, this.imageOfRecipe));
    this.resetForm();
    
  }

  checkIfModelAreEmpty() {
    let areEmpty: boolean = false;
    if (this.nameOfRecipe == "" || this.descriptionOfRecipe == "" || this.imageOfRecipe == "")
      areEmpty = true;
    return areEmpty;
  }

  resetForm() {
    this.nameOfRecipe = "";
    this.descriptionOfRecipe = "";
    this.imageOfRecipe = "";
  }


  
}

