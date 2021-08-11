import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailedViewComponent } from './pokemon-detailed-view/pokemon-detailed-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokeTypesComponent } from './poke-types/poke-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailedViewComponent,
    NavbarComponent,
    PokeTypesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
