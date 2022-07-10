import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
export interface Token{
    access: string;
    refresh: string;
    userId: number;
    role: string;
    firstname: string;
    lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  path = `${environment.url}`;

    constructor(private httpClient: HttpClient) {}

    public login(data:any): Observable<Token> {
        return this.httpClient.post<Token>(`${this.path}/login`, data);
    }

    public signup(person: any): Observable<void> {
        return this.httpClient.post<void>(`${this.path}/register`, person);
    }

    public logout(token:any) {
        return this.httpClient.post<any>(`${this.path}/logout`,token);
    }

    public getAllUsers(){
        return this.httpClient.get(`${this.path}/getAllUsers`);
    }
}
