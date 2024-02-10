import { Component, OnInit } from '@angular/core';
import { BitacoraModel } from 'src/app/models/bitacora-model';
import { LogbookService } from 'src/app/services/logbook-service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styles: [
  ]
})
export class BitacoraComponent implements OnInit {
  logbooks: BitacoraModel[] = [];
  pageSize = 10;
  page: number = 1;

  constructor(
    private bitacoraService: LogbookService
  ) { }

  ngOnInit(): void {
    this.bitacoraService.getAllLoogbook().subscribe((response) => {
      this.logbooks = response;      
    });
  }
}
