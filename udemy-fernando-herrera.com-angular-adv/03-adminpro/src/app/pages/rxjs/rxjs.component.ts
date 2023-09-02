import { Component } from '@angular/core';
import {Observable, retry} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {
  constructor() {

    this.retornaObservable().pipe(
     retry(1)
    ).subscribe(
      valor => console.log('subs:',valor),
      (err) => console.warn('Error',err),
      () => console.info('obs terminado')
    );
  }

  retornaObservable() : Observable<number>{
    let i= -1;

    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if ( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2 ){
          observer.error('I llego al valor de 2');
        }
      },1000)
    });


  }
}
