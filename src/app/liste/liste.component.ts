import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() baslik = 'Başlık';
  @Input() liste = [];

  constructor() { }

  ngOnInit(): void {
  }

}
