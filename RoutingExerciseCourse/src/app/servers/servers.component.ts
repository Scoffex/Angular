import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();    
  }

  emitIdForService(id: number){
 /*    console.log("ID: " + id);
    this.serversService.emitId(id-1); */
    this.router.navigate(['/servers', id], {queryParams: {allowEdit: this.servers[id-1].id === 3 ? 1 : 0}, fragment: 'Loading'})
  }

}
