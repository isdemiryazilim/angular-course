import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  tarih = new Date();
  fiyat = 14.99;

  sayi = 1500.45;

  constructor() { }

  ngOnInit(): void {
  }

}
