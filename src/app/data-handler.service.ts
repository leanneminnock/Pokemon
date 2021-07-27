import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllPokemonResponse } from './modals/get-all-pokemon-response';
import { Pokemon } from './modals/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private _pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  public AllPokemon: GetAllPokemonResponse | null = null;
  public pokemon: Pokemon | undefined;

  constructor(private http: HttpClient) { }

  public getAllPokemon(){
    this.http.get<GetAllPokemonResponse>(this._pokemonUrl).subscribe(data => this.AllPokemon = data);
  }

  public getPokemonByName(name: string){
   return this.http.get<Pokemon>(this._pokemonUrl + name);
  }        
}
