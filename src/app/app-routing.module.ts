import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'hakkinda', component: HakkindaComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
