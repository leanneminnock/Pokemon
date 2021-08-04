import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailedViewComponent } from './pokemon-detailed-view/pokemon-detailed-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokeTypesComponentComponent } from './poke-types-component/poke-types-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailedViewComponent,
    NavbarComponent,
    PokeTypesComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
