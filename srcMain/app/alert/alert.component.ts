import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit{
    ngOnInit(){
        
    }

    public returnTheNameUpperCase(name: string){
      name = name.toLocaleUpperCase();
      return name;
    }
}
