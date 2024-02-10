import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';

@Component({
  selector: 'app-info-charcater',
  templateUrl: './info-charcater.component.html',
  styles: [
  ]
})
export class InfoCharcaterComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.printData(this.data);
  }


  private printData( character: CharacterModel){
    console.log(character);
  }
}
