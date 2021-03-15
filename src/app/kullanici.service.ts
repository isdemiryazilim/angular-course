import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http: HttpClient) { }

  kullaniciListele(): any {
    return [
      { ad: 'Ahmet', soyad: 'Yılmaz' },
      { ad: 'Ali', soyad: 'Demir' },
      { ad: 'Ayşe', soyad: 'Öztürk' },
    ];
  }

  kullaniciListeleBackend() {
    return this.http.get('http://localhost:7070/egitim-kullanicilar');
  }

  kullaniciKaydet(yeniKullanici: any) {
    return this.http.post('http://localhost:7070/egitim-kullanici-ekle', yeniKullanici);
  }
}
