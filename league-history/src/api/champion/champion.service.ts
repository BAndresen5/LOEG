import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Champion } from "./champion";

@Injectable({
    providedIn: 'root'
})
export class ChampionService {

    private url = 'api/champions/'

    constructor(private httpClient: HttpClient) { }

    getChampions(): Observable<Champion[]> {
        return this.httpClient.get<Champion[]>(this.url).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error)
                return throwError(() => new Error(error?.message))
            })
        )
    }

}