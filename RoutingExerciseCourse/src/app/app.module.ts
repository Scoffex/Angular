import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { AppGuardService } from './routing/app-guard.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { AuthService } from './routing/auth.service';
import { CanDeactivateGuardService } from './routing/deactivate-app-guard.service';
import { ResolverServer } from './routing/app.resolver.service';
import { GenericErrorComponent } from './generic-error/generic-error-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    GenericErrorComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ServersService, AuthService, AppGuardService, CanDeactivateGuardService, ResolverServer],
  bootstrap: [AppComponent],
})
export class AppModule {}
