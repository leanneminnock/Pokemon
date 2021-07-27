import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataHandlerService } from '../data-handler.service';
import { Pokemon } from '../modals/pokemon';

@Component({
  selector: 'app-pokemon-detailed-view',
  templateUrl: './pokemon-detailed-view.component.html',
  styleUrls: ['./pokemon-detailed-view.component.css']
})
export class PokemonDetailedViewComponent implements OnInit {
  public pokemon: Pokemon | undefined;

  constructor(public data: DataHandlerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pokeName = params.get('pokeName');
      if(pokeName)
      {
        this.data.getPokemonByName(pokeName).subscribe(data => this.pokemon = data);
      }
    });
  }

}
