import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor( public data: DataHandlerService) { }

  ngOnInit(): void {
    this.data.getAllPokemon();
  }

}
