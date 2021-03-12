import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  mesaj = '';
  interval = null;

  kullanici = {
    ad: 'Ali',
    soyad: 'Yılmaz',
    yas : 30
  };

  mesajDegisti(event) {
    this.mesaj = event.target.value;
  }

  alertGoster(): void {
    alert('Hata Oluştu');
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.kullanici.yas = this.kullanici.yas + 1;
    }, 300);
  }

}
