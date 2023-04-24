import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  private _ejemplo: string = "Hola mundo";
  public get ejemplo(): string {
    return this._ejemplo;
  }
  public set ejemplo(value: string) {
    this._ejemplo = value;
  }
}
