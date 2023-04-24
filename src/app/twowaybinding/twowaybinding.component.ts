import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  private _valor: string = "";
  public get valor(): string {
    return this._valor;
  }
  public set valor(value: string) {
    this._valor = value;
  }
}
