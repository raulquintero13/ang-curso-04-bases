import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: 'add-character.component.html'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void{
    this.character.id  = uuid();
    console.log(this.character)
    if ( this.character.name.length === 0 || this.character.power == null ) return;

    this.onNewCharacterEmitter.emit(this.character);

    this.character = {id: '',name: '', power: 0};
    // this.character.name = '';
    // this.character.power = 0;
  }
}
