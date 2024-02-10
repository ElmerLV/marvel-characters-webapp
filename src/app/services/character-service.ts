import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterModel } from '../models/character-model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  /**
   * Ruta base del servicio de Personajes.
   */
  private characterPath = environment.baseUrl + environment.characters;

  /** Constructor */
  constructor(private httpClient: HttpClient) {}

  /**
   * Consulta los personajes.
   */
  public getCharacters() {
    return this.httpClient.get<CharacterModel[]>(this.characterPath);
  }
}
