import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ShoppingService } from 'src/app/Service/shopping.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  name: string;
  description: string;
  path: string;

  constructor(private recipeService: RecipeService, private shopService: ShoppingService){}

  emittData() {
    console.log("emttere")
    this.recipeService.recipeEmitter.emit(this.recipe);
  }

  ngOnInit(): void {
    if (this.recipe != undefined) {
        this.name = this.recipe.name;
        this.description = this.recipe.description;
        this.path = this.recipe.imagePath;
    }
  }


}
