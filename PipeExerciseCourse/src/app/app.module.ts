import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppPipe } from './app.pipe';
import { ShortenStringPipe } from './app.pipe.shorten';
import { FiltredPipe } from './filtred.pipe';
import { SortedPipe } from './sorted.pipe';

@NgModule({
  declarations: [AppComponent, AppPipe, ShortenStringPipe, FiltredPipe, SortedPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
