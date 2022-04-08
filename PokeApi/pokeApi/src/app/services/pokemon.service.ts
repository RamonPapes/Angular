import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonList: {name: any, types: any}[] = []

  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient){}

  getPokemonList(): Observable<any>{
    console.log(this.url)
    return this.httpClient.get<any[]>(this.url)
  }

  getPokemonData(pokemon: any): Observable<any> {
    return this.httpClient.get<any[]>(`${pokemon.url}`)
  }
  
}

/*
oi
*/
