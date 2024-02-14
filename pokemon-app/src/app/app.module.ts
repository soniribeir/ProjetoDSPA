import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base/app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaviestPokemonsComponent } from './heaviest-pokemons/heaviest-pokemons.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TallestPokemonsComponent } from './tallest-pokemons/tallest-pokemons.component';
import { httpInterceptorProviders } from './interceptors/httpInterceptorProviders';
import { MessagesComponent } from './messages/messages.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { HighlightDirective } from './directive/highlight.directive';
import { TitleTransformationPipe } from './pipe/title-transformation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    HeaviestPokemonsComponent,
    TallestPokemonsComponent,
    PokemonSearchComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AboutComponent,
    MessagesComponent,
    PokemonFormComponent,
    HighlightDirective,
    TitleTransformationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
