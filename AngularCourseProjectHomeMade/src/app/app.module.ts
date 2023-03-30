import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { BasicHighlight } from './css_directive/bad-highlight.directive';
import { GoodDirective } from './css_directive/good-highlight.directive';
import { DropDownDirective } from './css_directive/dropDown.directive';
import { RecipeService } from './service/recipe.service';
import { ShoppingService } from './service/shopping.service';

import { RecipeResolver } from './routing/recipe.resolver.service';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { RecipeEditComponent } from './recipes/edit-recipe/edit-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http.service';
import { RecipeResolverHttp } from './routing/recipe.http.resolver.service';
import { RecipeGuard } from './routing/recipe.guard';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AuthComponent } from './auth-component/auth-component.component';

import { SelecteComponentComponent } from './selecte-component/selecte-component.component';
import { AuthService } from './service/auth.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

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
    GenericErrorComponent,
    RecipeEditComponent,
    AuthComponent,
    SelecteComponentComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecipeService, ShoppingService, RecipeResolver, HttpClientService, RecipeResolverHttp, RecipeGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
