import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'AngularServiceExercise';
  userActive: {name: string, state: string}[];
  userInactive: {name: string, state: string}[];
  @ViewChild('bottoncino') bottoncino: ElementRef;
  numero: number = 0;
  constructor(private userService: UserService, private render: Renderer2){
    
  }
  ngOnInit(){
    this.userActive = this.userService.userActive;
    console.log(this.userActive.length)
    this.userInactive = this.userService.userInactive;
    console.log(this.userInactive.length)
  }

  ciaociao(event: any) {
    if(this.numero == 350){
      this.numero = 650;
    }else if( this.numero == 650){
      this.numero = 0;
    } else {
      this.numero = 350;
    }
    let stringa: string = this.numero.toString() + "px";
    event.target.style.marginLeft = stringa;
    event.target.style

    
    }

}
