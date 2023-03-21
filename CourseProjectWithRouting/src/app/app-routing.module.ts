import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipeResolver } from './routing/recipe.resolver.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesSelectionComponent } from './recipes-selection-component/recipes-selection-component.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { RecipeEditComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesSelectionComponent,
      },
      {
        path: 'detail/:id',
        component: RecipeDetailComponent,
        resolve: { recipe: RecipeResolver },
      },
      {
        path: 'edit/:id',
        component: RecipeEditComponent,
        resolve: { recipe: RecipeResolver },
      },
      {
        path: 'edit',
        component: RecipeEditComponent,
        resolve: { recipe: RecipeResolver },
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent, /*
    children: [
      {
        path: 'edit-list',
        component: ShoppingEditComponent,
      },
    ], */
  },
  {
    path: 'not-found',
    component: GenericErrorComponent,
    data: { message: 'PAGE NOT FOUND' },
  },
  {
    path: 'not-exist',
    component: GenericErrorComponent,
    data: { message: 'RECIPE SELECTED NOT PRESENT IN THE SYSTEM' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
