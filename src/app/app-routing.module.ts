import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailedViewComponent } from './pokemon-detailed-view/pokemon-detailed-view.component';

const routes: Routes = [
  {
    path: "",
    component: PokeListComponent
  },
  {
    path: ":pokeName",
    component: PokeListComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
