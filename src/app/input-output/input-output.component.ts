import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  kullanici = {
    ad: 'Ahmet',
    soyad: 'Demir'
  };

  constructor() { }

  ngOnInit(): void {
  }

  alertGoster(event) {
    alert(event);
  }

}
