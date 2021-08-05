import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllPokemonResponse } from './modals/get-all-pokemon-response';
import { GetAllTypesResponse } from './modals/get-all-types-response';
import { PokeTypeInfo } from './modals/poke-type';
import { Pokemon } from './modals/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private _pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  private _typeUrl = "https://pokeapi.co/api/v2/type/";
  public AllPokemon: GetAllPokemonResponse | null = null;
  public allTypes: GetAllTypesResponse | null = null; 

  constructor(private http: HttpClient) { }

  public getAllPokemon(offset: number = 0, limit: number = 20){
    this.http.get<GetAllPokemonResponse>(this._pokemonUrl + `?offset=${offset}&limit=${limit}`).subscribe(data => this.AllPokemon = data);
  }

  public getPokemonByName(name: string){
   return this.http.get<Pokemon>(this._pokemonUrl + name);
  }   
  
  public getAllTypes(offset: number = 0, limit: number = 30){
    this.http.get<GetAllTypesResponse>(this._typeUrl + `?offset=${offset}&limit=${limit}`).subscribe(data => this.allTypes = data);
  }

  public getPokemonByType(name: string){
    return this.http.get<PokeTypeInfo>(this._typeUrl + name);
   } 
}

