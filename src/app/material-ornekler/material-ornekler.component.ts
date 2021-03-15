import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-ornekler',
  templateUrl: './material-ornekler.component.html',
  styleUrls: ['./material-ornekler.component.css']
})
export class MaterialOrneklerComponent implements OnInit {
  displayedColumns = ['ad', 'soyad', 'adsoyad'];
  dataSource = [
    { ad: 'Ahmet', soyad: 'Demir' },
    { ad: 'Ali', soyad: 'Yılmaz' },
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  alarmGoster() {
    this.snackBar.open('Hata Oldu.', 'Kapat', {
      duration: null,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
