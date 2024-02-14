import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Pokemon } from '../pokemon';



@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  private apiUrl = 'http://softwium.com/api/pokemons';
  //private pokemonsUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched pokemons')),
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getHeaviestPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl)
      .pipe(
        map(pokemons => {
          pokemons.sort((a, b) => b.weight - a.weight);

          return pokemons.slice(0, 3);
        })
    );
  }
  getTallestPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl).pipe(
      map(pokemons => {
        pokemons.sort((a, b) => b.height - a.height);

        return pokemons.slice(0, 3);
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  getPokemonNo404<Data>(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<Pokemon[]>(url)
      .pipe(
        map(pokemons => pokemons[0]), 
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} pokemon id=${id}`);
        }),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.put(this.apiUrl + '/' + pokemon.id, pokemon, this.httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }


  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiUrl, pokemon, this.httpOptions).pipe(
      tap((newPokemon: Pokemon) => this.log(`added pokemon w/ id=${newPokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }

  deletePokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  //updatePokemonInMemory(pokemon: Pokemon): Observable<any> {
  //  return this.http.put(this.pokemonsUrl,pokemon, this.httpOptions).pipe(
  //    tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
  //    catchError(this.handleError<any>('updatePokemonInMemory'))
  //  );
  //}
  //addPokemonInMemory(pokemon: Pokemon): Observable<Pokemon> {
  //  return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, this.httpOptions).pipe(
  //    tap((newPokemon: Pokemon) => this.log(`added pokemon w/ id=${newPokemon.id}`)),
  //    catchError(this.handleError<Pokemon>('addPokemon'))
  //  );
  //}
}
