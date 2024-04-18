import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { AcquistaComponent } from './acquista/acquista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noleggio', component: NoleggioComponent, children:[
    {path: 'acquista', component: AcquistaComponent}
  ]},
  {path: 'aggiungi', component: AggiungiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
