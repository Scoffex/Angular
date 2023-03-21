import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class RecipeEditComponent implements OnInit{
  private recipe: Recipe;
  private isUndefined: boolean = false; 

  constructor(private activeRoute: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
   this.activeRoute.data.subscribe((data: Data) => {
    this.recipe = data['recipe'];
    this.checkIfUndefined(this.recipe);
    console.log(this.isUndefined)
   });
  }


  checkIfUndefined(parameter: any){
    if(parameter===undefined){
      this.isUndefined = true;
    }
  }
}
