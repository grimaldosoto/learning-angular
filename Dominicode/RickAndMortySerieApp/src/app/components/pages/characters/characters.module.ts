import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {CharacterDetailsComponent} from "@characters/character-details/character-details.component";
import {CharacterListComponent} from "@characters/character-list/character-list.component";
import {CharacterComponent} from "@characters/character.component";


@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
  ]
})
export class CharactersModule { }
