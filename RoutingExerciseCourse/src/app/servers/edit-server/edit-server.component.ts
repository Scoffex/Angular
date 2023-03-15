import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateGuard } from 'src/app/routing/deactivate-app-guard.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  isUpdated = false;
  isAllowed = false;
  constructor(
    private serversService: ServersService,
    private router: Router,
    private activeRout: ActivatedRoute
  ) {}

  ngOnInit() {
    //get dei dati dal resolver
    this.activeRout.data.subscribe((data: Data) => {
      this.server = data['server'];
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    //get dei dati tramite il service, classico metodo: 

    /*     this.settinServerEdit(Number(this.activeRout.snapshot.params['id']));
    this.serversService.emidId.subscribe((params: Params) => {
      this.settinServerEdit(Number(params['id']));
    });
    this.isAllowed =
      this.activeRout.snapshot.queryParams['allowEdit'] === 0 ? false : true;
    this.activeRout.queryParams.subscribe((queryParams: Params) => {
      this.isAllowed = queryParams['allowEdit'] === 0 ? false : true;
    }); */
  }

  settinServerEdit(id: number) {
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.isUpdated = true;
    this.router.navigate(['../'], {
      relativeTo: this.activeRout,
      queryParamsHandling: 'preserve',
    });
  }

  canDeactivateGuard(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.isAllowed) {
      return true;
    }
    if (
      !this.isUpdated &&
      (this.serverName != this.server.name ||
        this.serverStatus != this.server.status)
    )
      return confirm(
        'Sei sicuro di voler abbandonare la pagina? Non hai salvato le modifiche'
      );
    else return true;
  }
}
