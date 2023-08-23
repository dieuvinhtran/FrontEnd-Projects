import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Person {
  name: string;
  age: number;
  height: number;
  isExisting: boolean;
}

interface Pokemon {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headers: string[];

  title: string;
  randomNumber: number;

  imgTitle: string;
  imgSrc: string;

  inputExample: string[];

  pokemonName: string;

  persons: Person[];

  pokemonName2: string;

  pokemonList: Pokemon[];

  constructor() {
    this.headers = [
      'String Interpolation',
      'Property binding',
      'Two way binding',
      'Template reference',
      'ngClass',
      'ngIf',
      'ngFor',
    ];

    //string interpolation
    this.title = 'Hello World';
    this.randomNumber = Math.random() * 10;

    //property binding
    this.imgTitle = 'Beaver Img';
    this.imgSrc =
      'https://media.istockphoto.com/id/180709420/de/foto/arbeit-hart.jpg?s=2048x2048&w=is&k=20&c=xajJDboUZMJh-VWWNemZjPrEvHbX1qc-gI8GCi1BoiY=';

    //two way binding
    this.inputExample = [];

    //template reference
    this.pokemonName = '';

    //ngClass
    this.persons = [
      { name: 'anna', age: 15, height: 20, isExisting: false },
      { name: 'hans', age: 20, height: 80, isExisting: true },
      { name: 'laura', age: 5, height: 1, isExisting: true },
    ];

    //ngIf
    this.pokemonName2 = '';

    //ngFor
    this.pokemonList = [
      { id: 1, name: 'pikachu', type: 'electric' },
      { id: 2, name: 'pichu', type: 'electric' },
    ];
  }

  handleClick(value: any) {
    console.log(value.value);
  }

  pokemonNameInputChange(event: any) {
    this.pokemonName2 = event?.target.value;
    console.log(this.pokemonName2);
  }
}
