import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public data: DataHandlerService) { }
  public pokeName: string | undefined;
  

  ngOnInit(): void {
    this.data.getAllTypes();
  }

  public onSearch(): void{
    if(this.pokeName){
       this.data.getPokemonByName(this.pokeName);
    }
    this.pokeName = "";
  }

}
