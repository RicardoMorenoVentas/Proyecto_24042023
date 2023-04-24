import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-padrehijo',
  templateUrl: './padre-padrehijo.component.html',
  styleUrls: ['./padre-padrehijo.component.css']
})
export class PadrePadrehijoComponent {
  private _pasoHijo: string = "";
  public get pasoHijo(): string {
    return this._pasoHijo;
  }
  public set pasoHijo(value: string) {
    this._pasoHijo = value;
  }
}
