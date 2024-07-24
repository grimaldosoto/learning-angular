import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Character} from "../../../layout/shared/interfaces/character.interface";
import {CharacterService} from "../../../../shared/services/character.service";
import {take} from "rxjs";
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";

type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit{
  characters: Character[] = [];
  info:RequestInfo = {
    next: "",
  };

  private pageNum=1;
  private query: string = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private getCharactersByQuery():void{
    this.route.queryParams
      .pipe(take(1))
      .subscribe(
        (params: any) => {
          console.log('params->',params);
          this.query = params['q'];
          this.getDataFromService();
        });
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
