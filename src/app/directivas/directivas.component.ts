import { Component } from '@angular/core';
import { Enumeracion } from 'src/_modelos/enumeraciones';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  private _opciones: string[] = Object.values(Enumeracion).map((r, ind, arr) => r as string);
  private _booleanIf: boolean = true;
  private _opcionSeleccionada: Enumeracion = Enumeracion.Hola;
  public get opcionSeleccionada(): Enumeracion {
    return this._opcionSeleccionada;
  }
  public set opcionSeleccionada(value: Enumeracion) {
    this._opcionSeleccionada = value;
  }
  public get booleanIf(): boolean {
    return this._booleanIf;
  }
  public set booleanIf(value: boolean) {
    this._booleanIf = value;
  }
  public get opciones(): string[] {
    return this._opciones;
  }
  public set opciones(value: string[]) {
    this._opciones = value;
  }
  cambiarIf(){
    this._booleanIf = !this._booleanIf;
  }
}
