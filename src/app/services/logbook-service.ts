import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BitacoraModel } from '../models/bitacora-model';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {
  /**
   * Ruta base del servicio de colonias.
   */
  private bitacoraPath = environment.baseUrl + environment.bitacora;

  /** Constructor */
  constructor(private httpClient: HttpClient) {}

  /**
   * Consulta la bitacora.
   */
  public getAllLoogbook() {
    return this.httpClient.get<BitacoraModel[]>(this.bitacoraPath);
  }
}
