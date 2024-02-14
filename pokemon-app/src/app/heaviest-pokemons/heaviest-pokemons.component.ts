import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';
import { PokemonImageService } from '../service/pokemon-image.service';


@Component({
  selector: 'app-heaviest-pokemons',
  templateUrl: './heaviest-pokemons.component.html',
  styleUrls: ['./heaviest-pokemons.component.css']
})
export class HeaviestPokemonsComponent implements OnInit {

  @Input() heaviestPokemons: Pokemon[] = [];

  constructor(private pokemonDataService: PokemonDataService, private pokemonImageService: PokemonImageService) { }

  ngOnInit() {
    this.getHeaviestPokemons();
  }

  getHeaviestPokemons(): void {
    this.pokemonDataService.getHeaviestPokemons().subscribe(pokemons => {

      this.heaviestPokemons = pokemons;

      this.heaviestPokemons.forEach((pokemon) => {
        this.pokemonImageService.getPokemonImage(pokemon.id);
      });
    });
  }
}
