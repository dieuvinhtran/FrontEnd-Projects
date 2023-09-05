import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonTypes: PokemonType[] = [
    {
      key: 0,
      value: 'Electric',
    },
    { key: 1, value: 'Water' },
    { key: 2, value: 'Fire' },
  ];

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemonById(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    });
  }

  toggleIsCool(event: any) {
    console.log(event);
  }

  handleSubmit(form: any) {
    console.log(form);
  }

  back(): void {
    this.router.navigate(['/pokemon']);
  }
}
