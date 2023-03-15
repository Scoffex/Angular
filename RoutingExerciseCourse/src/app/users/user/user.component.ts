import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  //parameter: Subscription;
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit() {     

    this.user = {
      id: this.route.snapshot.params['id'],     //tale porzione di codice va bene unicamente per il primo prelievo dei dati tramite il routing, perciò alla prima richeista che l'utente fa a quell'indirizzo con tali dati ma se noi provassimo ad 
      name: this.route.snapshot.params['name']  //aggiornare tali dati mediante una nuova linkedRoute verrebbero unicamente aggionrati nell'url ma this.user continuerà a contenere i dati iniziali.

      
      
    }

    //SOLUZIONE E CORRETTA APPLICATIONE PER FETACHARE I DATI IN MANIERA CORRETTA:
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }
    /*
    NOTA IMPROTANTE: Angular se la vede da solo ad effettuare la destroy del params quando ha terminato la subscribe, ovvero la subscribe rimane
    sempre in memoria in Angular ma ciò che genera viene distrutto e ricreato ogni qual volta ne necessitiamo. In questo caso params non rimane in memoria
    ma viene distrutto e ricreato quando viene effettuato l'OnInit. Ma in questo caso Angular lo fa automaticamente se volessimo farlo manualmente dovremmo improtare
    l'hook OnDesroy e creare un oggetto parameter: Subscription; e successivamente nel OnDestroy effettuare l'unsubscibe.
    */
  
  ngOnDestroy(): void {
   // this.parameter.unsubscribe();
  }


}
