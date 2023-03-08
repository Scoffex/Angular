import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants } from 'src/app/shareFolder/constants.utils';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Input() ciaoDaPrendere: string;
  @Output() recipeEmitter = new EventEmitter<Recipe>();
  constants: Constants;
  nameOfRecipe: string = "";
  buttonRecipe: string;
  descriptionOfRecipe: string = "";
  imageOfRecipe: string = "";
  recipes: Recipe[] = [new Recipe("Banan Split", "semplice e gustose banane fatte a crema", "https://www.my-personaltrainer.it/2020/04/08/proprieta-banane-orig.jpeg"), new Recipe("Lasagna", "gustosa lasagna con sugo", "https://www.antoniettapolcaro.it/wp-content/uploads/2022/02/Lasagna-alla-napoletana_2022-scaled.jpg")]
  showInputForm: boolean;
  isClick: boolean = false;

  constructor() {
    this.constants = new Constants;
    this.buttonRecipe = this.constants.NEW_RECIPE;
    this.showInputForm = false;
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
    this.recipes.push(new Recipe(this.nameOfRecipe, this.descriptionOfRecipe, this.imageOfRecipe));
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

  onRecipeSelected(recipe: Recipe ){
    
    this.recipeEmitter.emit(recipe);
  }
  
}

