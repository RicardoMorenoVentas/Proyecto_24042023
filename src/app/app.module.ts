import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioService } from 'src/_servicios/servicio.service';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { PasoparamsUnoComponent } from './pasoparams-uno/pasoparams-uno.component';
import { PasoparamsDosComponent } from './pasoparams-dos/pasoparams-dos.component';
import { PasomasparamsUnoComponent } from './pasomasparams-uno/pasomasparams-uno.component';
import { PasomasparamsDosComponent } from './pasomasparams-dos/pasomasparams-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OnewaybindingComponent,
    EventoComponent,
    TwowaybindingComponent,
    ServicioComponent,
    DirectivasComponent,
    PasoparamsUnoComponent,
    PasoparamsDosComponent,
    PasomasparamsUnoComponent,
    PasomasparamsDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
