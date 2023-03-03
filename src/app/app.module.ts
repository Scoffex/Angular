import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AlertComponent } from './alert/alert.component';
import { AlertComponentSuccess } from './alert/success-alert/alert-success.component';
import { AlertWarningComponent } from './alert/warning-alert/alert.warning.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, AlertComponent, AlertComponentSuccess, AlertWarningComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
