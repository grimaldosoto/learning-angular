import {Component, OnDestroy} from '@angular/core';
import {filter, interval, map, Observable, retry, Subscription, take} from "rxjs";
import setInterval from "$GLOBAL$";
import clearInterval from "$GLOBAL$";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent  implements  OnDestroy{
  public intervalSubs: Subscription;
  constructor() {
    //
    // this.retornaObservable().pipe(
    //  retry(1)
    // ).subscribe(
    //   valor => console.log('subs:',valor),
    //   (err) => console.warn('Error',err),
    //   () => console.info('obs terminado')
    // );
    this.intervalSubs = this.returnaIntervalo().subscribe(
      console.log
    )
  }

  returnaIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        // take(10),
        map(valor => valor + 1),
        filter(valor=>(valor % 2 === 0) ? true:false ),

      );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('I llego al valor de 2');
        }
      }, 1000)
    });


  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
