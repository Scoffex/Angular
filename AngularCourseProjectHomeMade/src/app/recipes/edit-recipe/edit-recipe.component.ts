import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientService } from 'src/app/service/http.service';
import { RecipeService } from 'src/app/service/recipe.service';
import { Ingredients } from 'src/app/shareFolder/ingredients.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  formRecipe: FormGroup;
  editMode: boolean = false;
  index: number;
  name: string;
  imageUrl: string;
  description: string;
  isValid: boolean;
  addButton: string = 'Save';
  id: number;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService, private httpClientRecipe: HttpClientService) {

  }

  ngOnInit(): void {
    
/*     this.recipe = this.activeRoute.snapshot.data['recipe'];
    this.loadRecipe(this.recipe);
    this.initForm(); */

      this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
      this.loadRecipe(this.recipe);
      this.initForm();
    });  


    this.formRecipe.valueChanges.subscribe(() => {
      this.isValid = this.formRecipe.valid;
    });
  }

  loadRecipe(recipe: Recipe){
    if (recipe != undefined) {
      this.editMode = true;
      this.addButton = 'Update'
      this.index = this.recipeService.getIndexOfRecipe(this.recipe);
    }
  }

  initForm() {

    let recipeIngredients = new FormArray([new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s-]+$'),
      ]),
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    })]);

    if (this.editMode) {
      console.log(this.recipe)
      this.name = this.recipe.name;
      this.imageUrl = this.recipe.imagePath;
      this.description = this.recipe.description;
      if (this.recipe.ingredients.length > 0) {
        recipeIngredients = new FormArray([]);
        this.recipe.ingredients.forEach((ingredient) => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, [
                Validators.required,
                Validators.pattern('^[a-zA-Z\\s]+$'),
              ]),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)]),
            })
          );
        });
      }
    }

    this.formRecipe = new FormGroup({
      name: new FormControl(this.name, [Validators.required, Validators.pattern(('^[a-zA-Z\\s-]+$'))]),
      imageUrl: new FormControl(this.imageUrl),
      description: new FormControl(this.description),
      ingredients: recipeIngredients,
    });
  }

  getControlsFromArray() {
    return (<FormArray>this.formRecipe.get('ingredients')).controls;
  }

  addIngredient() {
    (<FormArray>this.formRecipe.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-zA-Z\\s-]+$'),
        ]),
        amount: new FormControl(0, [Validators.required, Validators.min(1)]),
      })
    );
  }

  removeIngredient(index: number) {

    (<FormArray>this.formRecipe.get('ingredients')).removeAt(index);

  }

  onSubmit() {
    let arrIngredients: Ingredients[] = this.formRecipe.get('ingredients').value;
    this.name = this.formRecipe.get('name').value;
    this.description = this.formRecipe.get('description').value;
    this.imageUrl = this.formRecipe.get('imageUrl').value;

    /*  (<FormArray>this.formRecipe.get('ingredients')).value.forEach((ingredient: Ingredients) => {
      arrIngredients.push(ingredient);
     }); */

    let recipe = new Recipe(this.name, this.description, this.imageUrl, arrIngredients);
    if (this.editMode) {
      this.recipeService.editRecipe(this.index, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.resetValue();
    this.httpClientRecipe.saveAll();
    this.router.navigate(['../'], {relativeTo: this.activeRoute})
  }

  deleteValue() {
    this.resetValue();
    if (this.editMode) {
      this.router.navigate(['../../', 'detail', this.index], { relativeTo: this.activeRoute })
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activeRoute})
    }
  }
  resetValue() {
    this.formRecipe.reset();
    this.addButton = 'Save';
    this.name = '';
    this.description = '';
    this.imageUrl = '';
  }


}
