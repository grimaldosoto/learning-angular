import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Character} from "../../../layout/shared/interfaces/character.interface";
import {CharacterService} from "../../../../shared/services/character.service";
import {take} from "rxjs";
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";

type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  characters: Character[] = [];
  info:RequestInfo = {
    next: "",
  };

  private pageNum=1;
  private query:string = "";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getDataFromService()
  }

  private getDataFromService():void{
    this.characterService.searchCharacters(
      this.query, this.pageNum
    ).pipe(
      take(1)
    ).subscribe((res:any) => {
      console.log('Response->',res);
      const {info, results} = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    })
  }

}
