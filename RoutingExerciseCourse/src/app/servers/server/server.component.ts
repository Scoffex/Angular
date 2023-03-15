import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {

  server: { id: number; name: string; status: string};
  allowed: number;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.allowed = this.route.snapshot.queryParams['allowEdit'];
    let id: number = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(id);
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowed = queryParams['allowEdit'];
    })
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    }); 
   
  }

  navigateToEdit() {
    console.log(this.server.id)
    this.serversService.emitId(this.server.id);
    this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }

    
}
