import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ListService {
  // today = new Date().toISOString();

  // API urls
  private baseAPI = "https://6143a763c5b553001717d062.mockapi.io/api";
  private statsURL = "/stats";
  private wishesURL = "/wishes";

  constructor(private http: HttpClient) {}

  // Get stats
  getStats(): Observable<any> {
    return this.http
      .get(this.baseAPI + this.statsURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Get list of trips
  // getList(): Observable<any> {
  //   return this.http
  //     .get(this.baseAPI + this.getTripsURL)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // // Get info about one particular trip (with trip ID as a parameter)
  // getTrip(tripID: string): Observable<any> {
  //   return this.http
  //     .get(this.baseAPI + this.tripURL + '/' + tripID + '?key=' + this.APIKEY)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // Error handling
  handleError(error: any) {
    let errorMessage = "";
    let errorCode = error.status;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorCode);
  }
}
