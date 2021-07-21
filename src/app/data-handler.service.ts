import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './modals/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private _pokemonUrl = "https://github.com/mtrdp642/PokeApiNet.git";
  public pokemon: Pokemon[] = [];


  constructor(private http: HttpClient) { }
}
