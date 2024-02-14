import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  catchError, debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Pokemon } from '../pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemon$: Observable<Pokemon> = new Observable<Pokemon>();
  private searchTerms = new Subject<number>();

  constructor(private router: Router, private pokemonDataService: PokemonDataService) { }

  searchById(id: number): void {
    this.searchTerms.next(id);
  }

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id: number) => this.pokemonDataService.getPokemonById(id)
        .pipe(
          catchError(error => {
            console.error(error);
            return []; 
          })
        )
      )
    );
  }
  goToPokemonDetails(pokemon: Pokemon): void {
    if (pokemon) {
      this.router.navigate(['/detail', pokemon.id]);
    }
  }
}
