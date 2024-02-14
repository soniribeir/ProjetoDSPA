import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pokemons = [
      {
        id: 387, name: 'Dr. Nice', height: 12.3, weight: 3.4, types: "water", family: "batatas" }
    
    ];
    return { pokemons };
  }
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
  }

}
