import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import {Character} from "@shared/interfaces/character.interface";

@Component({
  selector: "app-character",
  template: `
    <div class="card">
      <div class="image">
        <a [routerLink]="['/character-details',character.id]">
          <img [src]="character.image" [alt]="character.name" class="card-img-top"/>
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/character-details', character.id]">
            <h2>{{character.name | slice: 0:15}}</h2>
            <h4 class="text-muted">{{character.gender}}</h4>
            <small class="text-muted">{{character.created | date}}</small>
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent {
  @Input() character!: Character;
}
