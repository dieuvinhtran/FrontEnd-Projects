import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList!: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  onRemovePokemon(event: Pokemon) {
    this.pokemonList = this.pokemonList.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: Pokemon[]) => {
      this.pokemonList = data;
    });
  }
}
