import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-coklu-dil',
  templateUrl: './coklu-dil.component.html',
  styleUrls: ['./coklu-dil.component.css']
})
export class CokluDilComponent implements OnInit {

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
  }

  dilDegistir(dil: string) {
    this.translocoService.setActiveLang(dil);
  }

}
