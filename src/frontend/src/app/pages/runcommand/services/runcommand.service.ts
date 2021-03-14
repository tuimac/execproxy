import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Runcommand } from '../models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RuncommandService {

  private baseurl: string = window.location.protocol + '//' + window.location.hostname + ':' + environment.port;

  constructor(private http: HttpClient) {}

  runCommand(command: String): Observable<Runcommand> {
    console.log(this.baseurl);
    return this.http.get<Runcommand>(
      `${this.baseurl}/runcommand?command=${command}`,
    ).pipe(
      map(data => {
        console.log(data['body']);
        return data['body'];
      }),
      catchError(error => {
        return throwError('Runcommand: There is some error.');
      })
    );
  }
}
