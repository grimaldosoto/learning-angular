import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private URL = '';
  private _reloadColumn$ = new BehaviorSubject<any>(null);
  public reloadColumn$ = this._reloadColumn$.asObservable();

  constructor(private httpClient:HttpClient) {}

  reloadColumn(id:string | null):void{
    this.httpClient.get(
      `${this.URL}/task/${id}`
    ).subscribe((response) =>
      this._reloadColumn$.next(Response)
    )
    console.log('debes de recargar la columna', id)
  }
}
