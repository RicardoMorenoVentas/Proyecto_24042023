import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijopadre',
  templateUrl: './padre-hijopadre.component.html',
  styleUrls: ['./padre-hijopadre.component.css']
})
export class PadreHijopadreComponent {
  private _stringHijo: string = "";
  public get stringHijo(): string {
    return this._stringHijo;
  }
  public set stringHijo(value: string) {
    this._stringHijo = value;
  }
  actualizarString(str_hijo : string){
    this._stringHijo = str_hijo;
  }
}
