import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  public characters = [];

  constructor(
    private _apiCharacter: ApiService
  ) {
    this._apiCharacter.getCharacters()
      .subscribe((characters: any) => {
        this.characters = characters.results;
      })
   }

  ngOnInit() {
  }

}
