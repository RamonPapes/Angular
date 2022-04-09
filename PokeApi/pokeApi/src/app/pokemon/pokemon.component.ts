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
    this.pokemons = this.pokemonService.getPokemonList()
  }
}
