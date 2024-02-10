import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character-service';
import { CharacterModel } from "../../models/character-model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {
  characters: CharacterModel[] = [];
  pageSize = 10;
  page: number = 1;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((response) => {
      this.characters = response;
    });
  }
}
