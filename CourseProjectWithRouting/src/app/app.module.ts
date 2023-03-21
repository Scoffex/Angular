import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './Header/header.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { BasicHighlight } from './Basic-Highlight/bad-highlight.directive';
import { GoodDirective } from './Basic-Highlight/good-highlight.directive';
import { DropDownDirective } from './Basic-Highlight/dropDown.directive';
import { RecipeService } from './Service/recipe.service';
import { ShoppingService } from './Service/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeResolver } from './routing/recipe.resolver.service';
import { RecipesSelectionComponent } from './recipes-selection-component/recipes-selection-component.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { RecipeEditComponent } from './recipes/edit-recipe/edit-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesItemComponent, 
    BasicHighlight, 
    GoodDirective,
    DropDownDirective,
    RecipesSelectionComponent,
    GenericErrorComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService, ShoppingService, RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
