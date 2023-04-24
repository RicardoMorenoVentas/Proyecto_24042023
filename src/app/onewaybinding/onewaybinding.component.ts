import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {
  private _habilitado: boolean = true;

  cambioEstado(){
    this._habilitado = !this._habilitado;
  }

  public get habilitado(): boolean {
    return this._habilitado;
  }
  public set habilitado(value: boolean) {
    this._habilitado = value;
  }

}
