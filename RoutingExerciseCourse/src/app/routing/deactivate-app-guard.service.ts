import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeactivateGuard{
    canDeactivateGuard(): boolean | Observable<boolean> | Promise<boolean>;
}

export class CanDeactivateGuardService implements CanDeactivate<CanDeactivateGuard>{
    canDeactivate(component: CanDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.canDeactivateGuard();
    }
}


/*Abbiamo creato un interfaccia che utilizzeremo in una classe che implementerà la logica effettiva per effettuare il deactiveGuard.
Successivamente abbiamo creato un service CanDeactiveGuardService che implementasse il CanDeactive di angular e avesse come component l'interfaccia creata. Abbiamo implementate
il suo unico metodo canDeactivate e tale metodo ritornnerà l'implementazione che daremo al metodo dell'interfaccia creata.

Infatti nella classe server Edit, nel caso in cui l'utente lasci la pagina senza salvare le modifiche attiveremo il DeactiveGuard, che cheiderà all'utente mediante un confirm, se 
vorrà realmente uscire dalla pagina senza salvare le modifiche. */