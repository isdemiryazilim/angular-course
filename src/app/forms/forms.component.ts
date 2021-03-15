import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KullaniciService } from '../kullanici.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  kullaniciForm = null;

  constructor(private formBuilder: FormBuilder, private kullaniciService: KullaniciService ) { }

  ngOnInit(): void {
    this.kullaniciForm = this.formOlustur()
  }

  formOlustur() {
    return this.formBuilder.group({
      ad: ['', Validators.required], //Form Control
      soyad: ['', Validators.required],
      sehir: ['istanbul']
    });
  }

  kaydet(): void {
    console.log(this.kullaniciForm.value);
    this.kullaniciService.kullaniciKaydet(this.kullaniciForm.value).subscribe();

    this.kullaniciForm = this.formOlustur();
  }

}
