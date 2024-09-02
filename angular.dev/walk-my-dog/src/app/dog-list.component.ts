import { Component } from '@angular/core';
import { DogsService } from './dogs.service';
import { CommonModule } from '@angular/common';
import { DogListCardComponent } from './dog-list-card.component';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, DogListCardComponent],
  template: `
    <section class="hero-section">Discover pets to walk near you</section>
    <article class="pet-list">
      <app-dog-list-card
        *ngFor="let dog of dogsService.dogs; let i = index"
        [index]="i"
        [dog]="dog"
      ></app-dog-list-card>
    </article>
  `,
  styleUrl: './dog-list.component.css',
})
export class DogListComponent {
  constructor(readonly dogsService: DogsService) {}
}
