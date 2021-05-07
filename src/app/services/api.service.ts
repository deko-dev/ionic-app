import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly base_url = `https://rickandmortyapi.com/api/`;

  constructor(
    private http: HttpClient
  ) { }


  getCharacters() {
    let characters_url = `${this.base_url}character`;
    return this.http.get(characters_url)
  }

  getCharacter(idCharacter: string | number ) {
    let character_url = `${this.base_url}character/${idCharacter}`;
    return this.http.get(character_url);
  }

}
