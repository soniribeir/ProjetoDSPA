import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';
import { PokemonImageService } from '../service/pokemon-image.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemons: Pokemon[] = [];
  heaviestPokemons: Pokemon[] = [];
  tallestPokemons: Pokemon[] = [];

  constructor(private pokemonDataService: PokemonDataService, private pokemonImageService: PokemonImageService) { }

  ngOnInit(): void {
    this.getHeaviestPokemons();
    this.getTallestPokemons();
  }


  getHeaviestPokemons(): void {
    this.pokemonDataService.getHeaviestPokemons().subscribe(pokemons => {
      this.heaviestPokemons = pokemons;
    });
  }

  getTallestPokemons(): void {
    this.pokemonDataService.getTallestPokemons().subscribe(pokemons => {
      this.tallestPokemons = pokemons;
    });
  }
}
