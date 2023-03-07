import { Component, ElementRef, EventEmitter, Input , Output, ViewChild} from '@angular/core';
import { Ingredients } from '../shareFolder/ingredients.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {



  ingredientsArr: Ingredients [] = [new Ingredients('banana', 10), new Ingredients('arancia', 25)];
  @Output() emitEventToPadre = new EventEmitter<string>();
  @ViewChild(ShoppingEditComponent) name: ShoppingEditComponent;
  @ViewChild('amiciPostale') namee: ElementRef;
  onVariableUpdated(variable: string) {
   this.emitEventToPadre.emit(variable);
    console.log(variable); // Output: 'New Value'
  }

  mama() { 

    console.log(' ECCO NG NOME :' + this.namee.nativeElement.textContent)
    console.log("ECCO IL NOME: " + this.name.amount.nativeElement.value);
    }
}
