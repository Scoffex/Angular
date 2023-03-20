import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UserService{

    booleanEmitter = new Subject<boolean>();

    emitBoolean(value: boolean){
        this.booleanEmitter.next(value);
    }
}