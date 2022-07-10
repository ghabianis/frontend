import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ConditionalExpr} from "@angular/compiler";
export interface Connection {
    firstname: string;
    lastname: string;
}
@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    private connection = new Subject<Connection>();
    connected$ = this.connection.asObservable();
    constructor() {
    }

    setConnection(connection: Connection): void{
        this.connection.next(connection);
    }
}
