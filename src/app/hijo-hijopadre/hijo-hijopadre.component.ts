import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-hijopadre',
  templateUrl: './hijo-hijopadre.component.html',
  styleUrls: ['./hijo-hijopadre.component.css']
})
export class HijoHijopadreComponent {
  @Output() eventoString = new EventEmitter<string>();

  private _stringHijo: string = "";
  public get stringHijo(): string {
    return this._stringHijo;
  }
  public set stringHijo(value: string) {
    this._stringHijo = value;
  }
  mandarString(){
    this.eventoString.emit(this._stringHijo);
  }
}
