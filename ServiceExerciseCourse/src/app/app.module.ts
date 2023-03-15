import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [AppComponent, ActiveUserComponent, InactiveUserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
