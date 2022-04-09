import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //pokemonList: {name: any, types: any}[] = []
  pokemons = new BehaviorSubject<any>([]);

  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient){}

  getPokemonList(): Observable<any>{
    this.httpClient.get<any[]>(this.url)
    .subscribe((pkms: any) => {
      let pos = 0;
      pkms.results.forEach((pkm: any) => {
        this.savePokemonData(pos, pkm)
        pos++;
      })
    })

    return this.pokemons;
  }

  savePokemonData(pos: number, pokemon: any) {
    //console.log(pos)
    this.httpClient.get<any[]>(`${pokemon.url}`).subscribe(data => {
      let pkms: any[] = [];
      if(this.pokemons.getValue()) pkms = this.pokemons.getValue()
      pkms[pos] = data;
      //this.pokemons.next(pkms);
    });
  }
}

/*
oi
*/
