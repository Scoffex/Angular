import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ciao: string = "Hello World";

  buttonClicked(nome: any){
    console.log("ciao amici della postale, pezzo di codice passato dall'esterno: "  + nome);
  }
}
