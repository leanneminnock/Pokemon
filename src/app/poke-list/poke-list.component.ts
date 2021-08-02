import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataHandlerService } from '../data-handler.service';
import { Pokemon } from '../modals/pokemon';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  public pokemon: Pokemon | undefined;
  limit: number = 20;
  page: number = 0;

  constructor( public data: DataHandlerService, private route: ActivatedRoute) { }

  onNext(): void {
    this.page += 1;
    this.data.getAllPokemon(this.page*20, this.limit);
  }

  onPrevious(): void {
    this.page -= 1;
    this.data.getAllPokemon(this.page*20, this.limit);
  }

  onPageSelected(newPageNum: number): void{
    this.page = newPageNum;
    this.data.getAllPokemon(this.page*20, this.limit);
  }

  ngOnInit(): void {
    this.data.getAllPokemon(this.page, this.limit);
    this.route.paramMap.subscribe(params => {
      const pokeName = params.get('pokeName');
      if(pokeName)
      {
        this.data.getPokemonByName(pokeName).subscribe(data => this.pokemon = data);
      }
    });
  }


}
