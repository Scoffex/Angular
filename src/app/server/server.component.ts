import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css', '../app.component.css']
})
export class ServerComponent{
    public inputTextValue: string = '';
    name: string;
    buttonSender: any;
    isClick: boolean = false;
    color: string = "red";
    style: string = "MAINDIV";
    able: string = "RENDER ACTIVE: ";
    divName: string = "divName";
    num: number = 1;
    buttonText: string = "RENDER NAME";
    render: boolean = false;
    public checkIfTheUserAreEmpty(){
        return this.inputTextValue == "";
    }
  
    public buttonClicked(){
        this.num++;
        if(this.num%2 == 0){
            this.buttonText = "DISABLE RENDER";
            this.render = true;
            this.inputTextValue = "";
        } else{
            this.buttonText =  "RENDER NAME";
            this.render = false;
        }
    }
    public stampa(input: any){
    this.name = input.target.value;
    }
    
    /*
    myClassInstance: AlertComponent;
    nome: string = "";
    cognome: string = "";
    event: any;
    constructor(){
        this.myClassInstance = new AlertComponent();
    }

    public getMyClassInstance(){
        return this.myClassInstance = new AlertComponent();
    }

    public cercaIlvalore(event: Event){
        console.log(event);
        console.log((<HTMLInputElement>event.target).value);

    }

    public nameSended(name: string, surname: string){
        name = this.myClassInstance.returnTheNameUpperCase(name);
        surname = this.myClassInstance.returnTheNameUpperCase(surname);
        const paragrafo = document.getElementById("printName");
        this.nome = name;
        this.cognome = surname;
        
       
        paragrafo.innerText = `Hi ${this.nome} ${this.cognome}`;
    }
*/  
}