import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterDetailsComponent} from "@characters/character-details/character-details.component";
import {CharacterListComponent} from "@characters/character-list/character-list.component";



@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterDetailsComponent,
    CharacterListComponent
  ]
})
export class CharactersModule { }
