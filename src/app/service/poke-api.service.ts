import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50';

  public apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => {
        res.results.map((resPokemon: any) => {
          this.apiGetPokemon(resPokemon.url).subscribe(
            (res) => (resPokemon.status = res)
          );
        });
      })
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
