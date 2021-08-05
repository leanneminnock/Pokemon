import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataHandlerService } from '../data-handler.service';
import { PokeTypeInfo } from '../modals/poke-type';

@Component({
  selector: 'app-poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css']
})
export class PokeTypesComponent implements OnInit {
  public pokemonType: PokeTypeInfo | undefined;

  constructor(public data: DataHandlerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pType = params.get('pokeType');
      if(pType)
      {
        this.data.getPokemonByType(pType).subscribe(data => this.pokemonType = data);
      }
    });
  }

}
