import { Component, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  /* liste qui contiendra tous les pokemons */
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }
  /* instanciation du service */


  ngOnInit(): void {
    this.pokemonService.getPokemonList()
    /* il est possible de passer plusieurs fonctions dans le suscribe :
          - quand ça se passe bien, fais ça
          - quand il y a une erreur, fais ça
          - dans tous les cas, fais ça */
      .subscribe(
        /* je déclare un paramètre de type Pokedex */
        (pokedex: Pokedex) => {
          /* pokedex.cards est du même type que this.pokemonList*/
        this.pokemonList = pokedex.cards
        }
      )
  }

}
