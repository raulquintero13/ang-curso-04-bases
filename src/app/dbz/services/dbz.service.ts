import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters: Character [] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'goku',
    power: 3500
  },
  {
    id: uuid(),
    name: 'tercero',
    power: 1300
  }

  ];

  addCharacter ( character: Character):void{

    const newCharacter: Character = { ...character };
    console.log('onNew',newCharacter);

    this.characters.push(newCharacter);
  }

  // onDeleteById (index: number): void{
  //   console.log({index});
  //   this.characters.splice(index, 1);
  // }

  deleteById(id: string):void {

    this.characters = this.characters.filter( character => character.id !== id);

    console.table(this.characters);

  }



}
