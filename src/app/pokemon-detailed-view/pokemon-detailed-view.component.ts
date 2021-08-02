import { Component, Input, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { Pokemon } from '../modals/pokemon';

@Component({
  selector: 'app-pokemon-detailed-view',
  templateUrl: './pokemon-detailed-view.component.html',
  styleUrls: ['./pokemon-detailed-view.component.css']
})
export class PokemonDetailedViewComponent implements OnInit {
  @Input()
  public pokemon: Pokemon | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }

}
