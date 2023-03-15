import { EventEmitter } from "@angular/core";

export class ServersService {
  emidId = new EventEmitter<{id: number, name: string, status:string}>();
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
  
    const server = this.servers.find(
      (s) => {
        
        return s.id == id;
      }
    );
    
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }


  emitId(id: number){
  
    this.emidId.emit(this.servers[id-1]);
  }
}
