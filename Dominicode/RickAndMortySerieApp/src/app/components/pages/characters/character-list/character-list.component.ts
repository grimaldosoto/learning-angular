import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CharacterService} from "@shared/services/character.service";
import {Character} from "@shared/interfaces/character.interface";
import {take} from "rxjs/operators";

type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})


export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info:RequestInfo = {
    next: "",
  };

  private pageNum=1;
  private query: string = "";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getCharactersByQuery():void{
    this.route.queryParams.pipe(take(1))
      .subscribe((params: ParamMap) => {
        this.query = params['q'];
        this.getDataFromService();
      })
  }

  private getDataFromService():void{
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res:any) => {

        if(res?.results?.length) {
          const {info, results} = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        }else{
          this.characters = [];
        }
      })
  }

}
