import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-merhaba',
  templateUrl: './merhaba.component.html',
  styleUrls: ['./merhaba.component.css']
})
export class MerhabaComponent implements OnInit {
  @Input() isim: string;
  @Input() selamlama = 'Merhaba';
  @Output() butonTiklandi = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  mesajYolla() {
    this.butonTiklandi.emit('MESAJ');
  }

}
