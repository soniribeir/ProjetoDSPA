import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  pokemon: Pokemon = {
    id: 0, name: '', height: 0, weight: 0, types: [], family:''
  }
  pokemonTypes = [
    'Normal', 'Grass', 'Fire', 'Water', 'Electric', 'Ice', 'Fighting', 'Poison',
    'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark',
    'Steel', 'Fairy', 'Stellar'
  ];

  constructor(
    private route: ActivatedRoute,
    private pokemonDataService: PokemonDataService,
    private location: Location
  ) { }

  save(): void {
    if (this.pokemon) {
      this.pokemonDataService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }

  hasSelectedTypes() {
    return this.pokemon.types && this.pokemon.types.length > 0;
  }
}
