import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../service/pokemon-data.service';
import { Pokemon } from '../pokemon';
import { PokemonImageService } from '../service/pokemon-image.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemonName: string = '';
  pokemonHeight: string = '';
  pokemonWeight: string = '';

  selectedTypes: string[] = [];
  pokemonFamily: string = '';

  constructor(private pokemonDataService: PokemonDataService, public pokemonImageService: PokemonImageService) { }

    ngOnInit(): void {
      this.getPokemons(); 
    }

    getPokemons(): void {
      this.pokemonDataService.getPokemons().subscribe(pokemons => {
        this.pokemons = pokemons; 
      });
    }


    delete(pokemon: Pokemon): void {
      this.pokemons = this.pokemons.filter(p => p !== pokemon);
      this.pokemonDataService.deletePokemon(pokemon.id).subscribe();
    }
  }


