import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractRestService<T> {
    protected constructor(protected http: HttpClient) {
    }

    list(url: string, options ?: object): Observable<T[]> {
        return this.http.get<T[]>(url, options);
    }

    get(url: string, id: number, options ?: object): Observable<T> {
        return this.http.get<T>(`${url}/${id}`, options);
    }

    create(url: string, object: T, options ?: object): Observable<T> {
        return this.http.post<T>(url, object, options);
    }

    put(url: string, id: number, object: T, options ?: object): Observable<T> {
        return this.http.put<T>(`${url}/${id}`, object, options);
    }

    delete(url: string, id: number, options ?: object): Observable<void> {
        return this.http.delete<void>(`${url}/${id}`, options);
    }
}

export function saveDataToLocalhost(data: any): void {
    const keys = Object.keys(data);
    keys.forEach((key: string) => {
        localStorage.setItem(key, data[key]);
    });
}
