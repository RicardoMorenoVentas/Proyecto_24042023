import { Component } from '@angular/core';

@Component({
  selector: 'app-pasomasparams-uno',
  templateUrl: './pasomasparams-uno.component.html',
  styleUrls: ['./pasomasparams-uno.component.css']
})
export class PasomasparamsUnoComponent {
  private _id: string = "";
  private _editable: boolean = false;

  public get editable(): boolean {
    return this._editable;
  }
  public set editable(value: boolean) {
    this._editable = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
