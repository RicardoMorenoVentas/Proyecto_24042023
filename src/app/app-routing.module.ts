import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { PasoparamsDosComponent } from './pasoparams-dos/pasoparams-dos.component';
import { PasomasparamsDosComponent } from './pasomasparams-dos/pasomasparams-dos.component';
import { PasoparamsUnoComponent } from './pasoparams-uno/pasoparams-uno.component';
import { PasomasparamsUnoComponent } from './pasomasparams-uno/pasomasparams-uno.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PadrePadrehijoComponent } from './padre-padrehijo/padre-padrehijo.component';
import { PadreHijopadreComponent } from './padre-hijopadre/padre-hijopadre.component';

const routes: Routes = [
  { path: 'inter', component: InterpolacionComponent },
  { path: 'oneway', component: OnewaybindingComponent },
  { path: 'evento', component: EventoComponent },
  { path: 'twoway', component: TwowaybindingComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'pasoparamdos/:id', component: PasoparamsDosComponent },
  { path: 'pasoparamuno', component: PasoparamsUnoComponent },
  { path: 'pasomasparamsuno', component: PasomasparamsUnoComponent },
  { path: 'pasomasparamsdos', component: PasomasparamsDosComponent },
  { path: 'padre-padrehijo', component: PadrePadrehijoComponent },
  { path: 'padre-hijopadre', component: PadreHijopadreComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
