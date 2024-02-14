import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonDataService } from '../service/pokemon-data.service';
import { PokemonImageService } from '../service/pokemon-image.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon | undefined;
  checkboxStates: { [type: string]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private pokemonDataService: PokemonDataService,
    public pokemonImageService: PokemonImageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonDataService.getPokemonById(id)
      .subscribe(pokemon => {
        this.pokemon = pokemon;

        this.checkboxStates = {};

        this.pokemon.types.forEach(type => {
          this.checkboxStates[type] = false;
        });

        pokemon.types.forEach(type => {
          this.checkboxStates[type] = true;
        });

         this.pokemonImageService.getPokemonImage(pokemon.id);
      });
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.pokemon) {
      this.pokemon.types = Object.keys(this.checkboxStates).filter(type => this.checkboxStates[type]);
      this.pokemonDataService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }
  }
}


