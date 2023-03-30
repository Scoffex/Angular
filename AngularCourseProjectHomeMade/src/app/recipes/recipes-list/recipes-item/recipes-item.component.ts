import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { ShoppingService } from 'src/app/service/shopping.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id: number;


  constructor(private recipeService: RecipeService){}


  ngOnInit(): void {
    
    
  }


}
