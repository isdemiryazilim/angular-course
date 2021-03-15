import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DirectivesComponent } from './directives/directives.component';
import { KullaniciListeComponent } from './kullanici-liste/kullanici-liste.component';
import { FormsComponent } from './forms/forms.component';
import { CokluDilComponent } from './coklu-dil/coklu-dil.component';
import { MaterialOrneklerComponent } from './material-ornekler/material-ornekler.component';

const routes: Routes = [
  { path: 'hakkinda', component: HakkindaComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'kullanici-liste', component: KullaniciListeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'coklu-dil', component: CokluDilComponent },
  { path: 'material-ornekler', component: MaterialOrneklerComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
