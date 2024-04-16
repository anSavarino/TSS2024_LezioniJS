import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { StudentiComponent } from './studenti/studenti.component';
import { CorsiComponent } from './corsi/corsi.component';


// qui dentro definiso le rotte come oggetti js
const routes: Routes = [

  {path: "", component: HomeComponent},
  {path:"chiSiamo", component: ChiSiamoComponent, children:[
    {path: 'chiSiamo/docenti', component: DocentiComponent},
    {path: 'chiSiamo/studenti', component: StudentiComponent},
    {path: 'chiSiamo/corsi', component: CorsiComponent}
  ] }, // path è il fragment 
  {path: "contatti", component: ContattiComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
