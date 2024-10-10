import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { ScoringChampion } from "./scoring-champion";

@Injectable({
    providedIn: 'root'
})
export class ScoringChampionService {

    private url = 'api/scoringChampions/'

    constructor(private httpClient: HttpClient) { }

    getScoringChampions(): Observable<ScoringChampion[]> {
        return this.httpClient.get<ScoringChampion[]>(this.url).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error)
                return throwError(() => new Error(error?.message))
            })
        )
    }

}