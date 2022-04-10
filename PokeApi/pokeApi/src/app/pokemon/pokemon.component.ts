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

  convertTypes(types: any) {
    let types_string = '';
    let type_list = types.map((tps: any) => tps.type.name)
    console.log(type_list)
    type_list.forEach((type: string) => types_string += type + ' ') 
    return types_string
  }
}
