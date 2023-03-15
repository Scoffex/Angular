import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-generic-error-component',
  templateUrl: './generic-error-component.component.html',
  styleUrls: ['./generic-error-component.component.css']
})
export class GenericErrorComponent implements OnInit{
  message: string;

  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.message = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Params) => {
      this.message = data['message'];
    })
  }

}
