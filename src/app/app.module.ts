import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './abc/hakkinda/hakkinda.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { InputOutputComponent } from './abc/input-output/input-output.component';
import { MerhabaComponent } from './merhaba/merhaba.component';
import { DirectivesComponent } from './directives/directives.component';
import { ListeComponent } from './liste/liste.component';
import { KullaniciListeComponent } from './kullanici-liste/kullanici-liste.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
