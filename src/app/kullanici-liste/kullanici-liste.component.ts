import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { KullaniciService } from '../kullanici.service';

@Component({
  selector: 'app-kullanici-liste',
  templateUrl: './kullanici-liste.component.html',
  styleUrls: ['./kullanici-liste.component.css']
})
export class KullaniciListeComponent implements OnInit {

  kullaniciListesi = [];
  kullaniciListesiBackend = [];

  constructor(private kullaniciService: KullaniciService) { }

  ngOnInit(): void {
    this.kullaniciListesi = this.kullaniciService.kullaniciListele();
    this.kullaniciService.kullaniciListeleBackend()
      .pipe(tap((res: []) => {
        console.log(res);
        this.kullaniciListesiBackend = res;
      })).subscribe();
  }

}
