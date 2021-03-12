import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  yas = 29;
  hataliMi = this.yas < 30;

  isimler = [
    { ad: 'ahmet' },
    { ad: 'mehmet' },
    { ad: 'ayşe' },
    { ad: 'fatma' },
  ];

  gunler = ['Pazartesi', 'salı', 'çarşamba'];
  yillar = ['2010', '2021', '2030', '2040'];

  constructor() { }

  ngOnInit(): void {
  }

  kontrol(): boolean {
    return this.yas < 30;
  }

}
