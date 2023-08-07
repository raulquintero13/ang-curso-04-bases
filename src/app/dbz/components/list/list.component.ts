import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    id: '',
    name: 'mexico',
    power: 0
  }]

  @Output()
  public onDeleteIdEmitter: EventEmitter<string> = new EventEmitter()
  //este ejemplo es exactamente lo mismo
  // public onDeleteIdEmitter = new EventEmitter<number>()



  public onDeleteCharacter(id: string): void {

    this.onDeleteIdEmitter.emit(id);

  }

}
