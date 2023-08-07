import { Component, OnInit } from '@angular/core';
import {Character} from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
public characters: Character [] = [{
  name: 'krillin',
  power: 1000
},
{
  name: 'goku',
  power: 3500
}

];
}
