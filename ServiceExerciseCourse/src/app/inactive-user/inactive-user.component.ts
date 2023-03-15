import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit{
  @Input() name: string;
  @Input() status: string;
  @Input() id: number;
  @ViewChild('stateButton') stateButton: ElementRef;

  constructor(private userService: UserService, private renderer: Renderer2){
    
  }
  ngOnInit() {
    /* console.log(this.stateButton.nativeElement);
    this.renderer.setStyle(this.stateButton.nativeElement, 'cursor', 'pointer') */
  }


    changeInActive(){
      this.userService.changActiveStatus(this.id);
      console.log('USER ' + this.id + ' HAS CHANGED FOLDER');
    }
  }
