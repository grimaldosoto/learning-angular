import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:3000/api/1.0';

  constructor(private httpClient:HttpClient) { }

  getTask():Observable<any>{
    return this.httpClient.get(
     `${this.URL}/task`
     ).pipe(
      catchError(() => {

        console.log('algo ocurrio kk')
        return of([])
      })
     )
  }
}
