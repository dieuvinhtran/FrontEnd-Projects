import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input()
  detailList!: Pokemon[];

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onRemove(detail: Pokemon) {
    this.remove.emit(detail);
  }
}
