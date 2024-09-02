import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from './dogs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article *ngIf="(dog$ | async) as dog">

    <article>
      <h1> Hi, I'm {{dog.name}}</h1>
      <h2>My owner's name is {{dog.name}}</h2>
      <p>{{dog.description}}</p>
      <p> I Live in {{dog.life}}</p>
    </article>
</article>
  `,
  styles: ``,
})
export class DogViewComponent implements OnInit {
  dog$!: Observable<Dog | undefined>;

  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogsService.dogs[Number(params.get('index'))]
    }))
  }
}
