import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Character} from "../../views/layout/shared/interfaces/character.interface";
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 2){
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(
      filter
    );
  }

  getDetails(id: number){
    return this.http.get<Character[]>(
      `${environment.baseUrlAPI}/id=${id}`
    )
  }
}
