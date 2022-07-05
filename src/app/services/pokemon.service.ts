import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model'
import { Pokedex } from '../models/pokedex.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'assets/pokemon.json'

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokedex>{
    /* relier le composant list au service */

    return this.http.get<Pokedex>(`${this.baseUrl}`) /* renvoie un observable de type Pokedex */

  }
}
