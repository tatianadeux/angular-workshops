import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  /* créer la variable qui reçoit la donnée du parent */
  @Input()
  pokemon: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
