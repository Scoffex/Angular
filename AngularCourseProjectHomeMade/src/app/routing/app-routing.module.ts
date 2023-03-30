import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth-component/auth-component.component';
import { GenericErrorComponent } from '../generic-error/generic-error.component';
import { RecipeEditComponent } from '../recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { SelecteComponentComponent } from '../selecte-component/selecte-component.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeGuard } from './recipe.guard';

import { RecipeResolverHttp } from './recipe.http.resolver.service';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
 
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivateChild: [RecipeGuard],
    
    resolve: { recipeInit: RecipeResolverHttp },
    children: [
      {
        path: '',
        component: SelecteComponentComponent,
        data: { noAuthGuard: true } 
      },
      {
        path: 'detail/:id',
        component: RecipeDetailComponent,
       
        //resolve: { recipe: RecipeResolver },
      },
      {
        path: 'edit/:id',
        component: RecipeEditComponent,
       
      //  resolve: { recipe: RecipeResolver },
      },
      {
        path: 'edit',
        component: RecipeEditComponent,
        data: { noAuthGuard: true } 
       // resolve: { recipe: RecipeResolver },
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
    path: 'auth',
    component: AuthComponent,
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
