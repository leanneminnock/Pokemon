import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor( public data: DataHandlerService, private route: ActivatedRoute, private router: Router) { }

  onNext(): void {
    this.page += 1;
    this.data.getAllPokemon(this.page*20, this.limit);
    this.updateQueryParam();
  }

  onPrevious(): void {
    this.page -= 1;
    this.data.getAllPokemon(this.page*20, this.limit);
    this.updateQueryParam();
  }

  onPageSelected(newPageNum: number): void{
    this.page = newPageNum;
    this.data.getAllPokemon(this.page*20, this.limit);
    this.updateQueryParam();
  }

  public updateQueryParam() {
    const queryParams: Params = { pageNo: this.page };
  
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParams, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  ngOnInit(): void {
    const pageNo = this.route.snapshot.queryParamMap.get("pageNo");
    if(pageNo)
    {
      this.page = parseInt(pageNo);
    }
    this.data.getAllPokemon(this.page*20, this.limit);
    this.route.paramMap.subscribe(params => {
      const pokeName = params.get('pokeName');
      if(pokeName)
      {
        this.data.getPokemonByName(pokeName).subscribe(data => this.pokemon = data);
      }
    });
  }


}
