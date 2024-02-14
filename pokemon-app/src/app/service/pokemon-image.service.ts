import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonImageService {

  private imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor() { }

  getPokemonImage(id: number) {
    return `${this.imageUrl}${id}.png`;
  }
}
