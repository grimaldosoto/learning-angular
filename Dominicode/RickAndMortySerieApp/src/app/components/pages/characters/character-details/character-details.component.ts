import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

import {Observable} from "rxjs";

import {Character} from "@shared/interfaces/character.interface";
import {CharacterService} from "@shared/services/character.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',

  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  // @ts-ignore
  character$: Observable<Character>;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe(
      (params) => {
        const id = params['id'];
        this.character$ = this.characterService.getDetails(id);

      }
    );
  }

  onGoBack():void{
    this.location.back();
  }

}
