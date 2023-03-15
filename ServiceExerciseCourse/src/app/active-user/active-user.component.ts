import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit{

  @Input() name: string;
  @Input() status: string;
  @Input() id: number;
  @ViewChild('inactiveButton') inactiveButton: ElementRef;
  constructor(private elRef: ElementRef, private userService: UserService, private renderer: Renderer2){
    
  }
  ngOnInit(): void {
    
  }
  
  changeInInactive(){
    this.userService.changInactiveStatus(this.id);
    console.log('USER ' + this.id + ' HAS CHANGED FOLDER');
  }

}
