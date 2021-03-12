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

  constructor() { }

  ngOnInit(): void {
  }

  kontrol(): boolean {
    return this.yas < 30;
  }

}
