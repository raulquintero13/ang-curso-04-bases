import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: 'add-character.component.html'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.character)
    if ( this.character.name.length === 0 || this.character.power == null ) return;

    this.onNewCharacterEmitter.emit(this.character);

    this.character = {name: '', power: 0};
    // this.character.name = '';
    // this.character.power = 0;
  }
}
