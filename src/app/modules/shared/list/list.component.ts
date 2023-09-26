import { PokeApiService } from './../../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private pokeApiService: PokeApiService) {}

  public listAllPokemons: Array<any> | undefined;
  public listFilterPokemons: Array<any> | undefined;
  public apiError: boolean = false;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons().subscribe({
      next: (res) => (
        (this.listAllPokemons = res.results),
        (this.listFilterPokemons = this.listAllPokemons)
      ),
      error: () => (this.apiError = true),
    });
  }

  public filterPokemons(name: string) {
    console.log(name);
    const filter = this.listAllPokemons?.filter(
      (pokemon) => !pokemon.name.indexOf(name.toLowerCase())
    );
    this.listFilterPokemons = filter;
  }
}
