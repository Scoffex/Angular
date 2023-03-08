import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {



  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter();
  name: string;
  description: string;
  path: string;

  emittData() {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
    if (this.recipe != undefined) {
      this.name = this.recipe.name;
      this.description = this.recipe.description;
      this.path = this.recipe.imagePath;
    }
  }


}
