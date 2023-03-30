import { PlatformLocation } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientService } from '../service/http.service';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit{
  selectedRecipe: boolean;

  constructor(){

  }


  ngOnInit(): void { 
   /*  this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedRecipe = false;
      } 
      }); */
  }



  
}

