import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { VerifyAuthService } from './service/verify-auth-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PokemonDetailComponent, canActivate: [VerifyAuthService] },
  { path: 'form', component: PokemonFormComponent, canActivate: [VerifyAuthService] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
