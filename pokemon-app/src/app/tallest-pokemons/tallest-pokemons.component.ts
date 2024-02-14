import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';

@Component({
  selector: 'app-tallest-pokemons',
  templateUrl: './tallest-pokemons.component.html',
  styleUrls: ['./tallest-pokemons.component.css']
})
export class TallestPokemonsComponent implements OnInit {

  tallestPokemons: Pokemon[] = [];

  constructor(private pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.getTallestPokemons();
  }

  getTallestPokemons(): void {
    this.pokemonDataService.getTallestPokemons()
      .subscribe(tallestPokemons => this.tallestPokemons = tallestPokemons);
  }
}
