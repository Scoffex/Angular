import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanActivateChildFn } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../service/recipe.service';


@Injectable()
export class RecipeGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private recipeService: RecipeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.recipeService.getAllRecipe().length == undefined || this.recipeService.getAllRecipe().length < 1 && route.data.noAuthGuard!=true) {
      this.router.navigate(['recipes']);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }







}