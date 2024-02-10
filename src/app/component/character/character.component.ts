import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character-service';
import { CharacterModel } from "../../models/character-model";
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoCharcaterComponent } from '../info-charcater/info-charcater.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {
  characters: CharacterModel[] = [];
  pageSize = 10;
  page: number = 1;

  constructor(
    private characterService: CharacterService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((response) => {
      this.characters = response;      
    });
  }

  view(character: CharacterModel) {
    this.createModal("Información de Personaje", character);
  }

  private createModal(title: string, character?: CharacterModel) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: "lg",
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.page = InfoCharcaterComponent;
    modalRef.componentInstance.data = character;
  }
}
