import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Owner } from "./owner";
import { Observable, catchError, map, retry, throwError } from "rxjs";
import { Standings } from "../standings/standings";

@Injectable({
    providedIn: 'root'
})
export class OwnerService {

    private url = 'api/owners/'

    httpClient = inject(HttpClient)

    getOwners(): Observable<Owner[]> {
        return this.httpClient.get<Owner[]>(this.url).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error)
                return throwError(() => new Error())
            })
        );
    }

    getOwner(id: number): Observable<Owner> {
        return this.httpClient.get<Owner>(`${this.url+ '/' + id}`).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error)
                return throwError(() => new Error())
            })
        );
    }

    getAllStandings(): Observable<(Standings[] | undefined)[]> {
        return this.httpClient.get<Owner[]>(this.url).pipe(
            retry(2),
            map((response) => {
                return response.map((owner) => {
                    return owner.standings
                })
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error)
                return throwError(() => new Error())
            })
        );
    }

}