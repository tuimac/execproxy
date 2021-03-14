import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Runcommand } from '../models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RuncommandService {

  private baseurl: string = window.location.protocol + '//' + window.location.hostname + ':' + environment.port;

  constructor(private http: HttpClient) {}

  runCommand(command: string): Observable<Runcommand> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set(
      'command', command
    );

    return this.http.get<Runcommand>(
      `${this.baseurl}/runcommand`,
      { headers, params },
    ).pipe(
      map((data) => {
        return data;
      },
      catchError(error => {
        return throwError('Runcommand: There are some error.');
      }))
    );
  }
}
