import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstOfSubscription: Subscription;
  count: number = 1;
  constructor() {}
  customObservable: Observable<any>;
  ngOnDestroy(): void {
    this.firstOfSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.firstOfSubscription = interval(1000).subscribe(() => console.log(this.count++))
    this.customObservable = Observable.create((observer) => {
      setInterval(() => {
        if (this.count === 6) {
          observer.complete();
        }
        if (this.count > 8) {
          observer.error(new Error('console is greater than 3'));
        }
        observer.next(this.count);
        this.count++;
      }, 1000);
    });

    this.firstOfSubscription = this.customObservable
      .pipe(
        filter((data: Number) => {
          return data > 0;
        }),
        map((data: Number) => {
          return 'Record: ' + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          alert(error);
        },
        () => {
          console.log('is Complited');
        }
      );
  }
}
