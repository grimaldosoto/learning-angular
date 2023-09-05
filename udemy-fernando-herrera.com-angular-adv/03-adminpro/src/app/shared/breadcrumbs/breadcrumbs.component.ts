import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{
  public titulo!: string;
  public tituloSubs$ = Subscription;

  constructor(private router:Router) {
    // @ts-ignore
    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe(({titulo}) => {
        this.titulo = titulo
        document.title = `Admin Pro - ${titulo}`;
      });
  }

  getArgumentosRuta(){
    return this.router.events
      .pipe(
        filter(event1 => event1 instanceof ActivationEnd),
        filter((event: any) => event.snapshot.firstChild === null),
        map((event:ActivationEnd) => event.snapshot.data)
      );
  }

  ngOnDestroy(): void {
    //this.tituloSubs$.unsubscribe();
  }

}
