import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { MerhabaComponent } from './merhaba/merhaba.component';
import { DirectivesComponent } from './directives/directives.component';
import { ListeComponent } from './liste/liste.component';
import { KullaniciListeComponent } from './kullanici-liste/kullanici-liste.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    HakkindaComponent,
    DataBindingComponent,
    PipeComponent,
    InputOutputComponent,
    MerhabaComponent,
    DirectivesComponent,
    ListeComponent,
    KullaniciListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
