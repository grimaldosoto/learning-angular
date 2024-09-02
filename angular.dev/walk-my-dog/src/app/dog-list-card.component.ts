import { Component, input, Input } from '@angular/core';
import { Dog } from './dogs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul>
      <li>
        {{ dog.name }} wants you to know this about {{ dog.name}}:
      {{dog.description}}
        <p><a href="/details/{{index}}">Learn More</a></p>
      </li>
    </ul>
  `,
  styleUrl: './dog-list-card.component.css',
})
export class DogListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: Number;
}
