import { Component } from '@angular/core';
import { ServicioService } from 'src/_servicios/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  public get servicio(): ServicioService {
    return this._servicio;
  }
  public set servicio(value: ServicioService) {
    this._servicio = value;
  }
  constructor(private _servicio: ServicioService){}

  printHolaMundo(){
    alert(this._servicio.holaMundo());
  }

}
