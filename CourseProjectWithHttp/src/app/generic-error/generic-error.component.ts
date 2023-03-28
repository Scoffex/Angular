import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.css']
})
export class GenericErrorComponent implements OnInit{

  message: string;

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.message = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.message = data['message'];
    })
  }
}
