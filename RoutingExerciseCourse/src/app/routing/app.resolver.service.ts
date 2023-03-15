import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers/servers.service";


interface ServerModel{
    id: number;
    name: string;
    status: string;
}
@Injectable()
export class ResolverServer implements Resolve<ServerModel>{

    constructor(private serverService: ServersService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerModel | Observable<ServerModel> | Promise<ServerModel> {
        return this.serverService.getServer(Number(route.params['id']))
    }

   

}