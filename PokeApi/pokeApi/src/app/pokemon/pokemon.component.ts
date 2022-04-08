import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']

})
export class PokemonComponent implements OnInit{
  pokemons: any;

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
    .pipe(mergeMap((pokemons) => this.pokemonService.getPokemonData(pokemons)))
    .subscribe((resp) => {
      console.log(resp);
      this.pokemons = resp;
    })
  }
}
