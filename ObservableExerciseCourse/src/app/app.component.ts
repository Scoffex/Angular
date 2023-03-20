import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  value: boolean = false;
  booleanEmitterSubscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.booleanEmitterSubscription = this.userService.booleanEmitter.subscribe((data: boolean) => {
      this.value = data;
    })
  }
  ngOnDestroy(): void {
    this.booleanEmitterSubscription.unsubscribe();
  }
}
