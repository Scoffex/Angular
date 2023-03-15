import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericErrorComponent } from '../generic-error/generic-error-component.component';
import { HomeComponent } from '../home/home.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { UsersComponent } from '../users/users.component';
import { AppGuardService } from './app-guard.service';
import { ResolverServer } from './app.resolver.service';
import { CanDeactivateGuardService } from './deactivate-app-guard.service';
const RoutingPage = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AppGuardService],
    children: [
      {
        path: ':id/edit',
        canDeactivate: [CanDeactivateGuardService],
        resolve: { server: ResolverServer },
        component: EditServerComponent,
      },
      {
        path: ':id',
        component: ServerComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: GenericErrorComponent,
    data: { message: 'Page not Found!' },
  },
  /* {
    path: 'not-found',
    component: PageNotFoundComponent}
  }, */
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(RoutingPage)],
 // imports: [RouterModule.forRoot(RoutingPage, { useHash: true })], mette un hash prima dei vari path di routing di angular, e serve principalmente perchè in quel #  andrà il nome sel server in cui hosteremo l'app.
  exports: [RouterModule],
})
export class AppRoutingModule {}
