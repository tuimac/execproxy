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

  constructor(private http: HttpClient) { }

  public runCommand(command: String): Observable<Runcommand> {
    return this.http.post<Runcommand>(
      `${this.baseurl}/runcommnad`,
      command
    ).pipe(
      map(data => {
        console.log(data['body']);
        return data['body'];
      }),
      catchError(error => {
        return throwError('Book not found');
      })
    );
  }
}
