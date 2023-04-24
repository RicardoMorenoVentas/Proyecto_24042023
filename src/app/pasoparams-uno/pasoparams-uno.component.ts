import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasoparams-uno',
  templateUrl: './pasoparams-uno.component.html',
  styleUrls: ['./pasoparams-uno.component.css']
})
export class PasoparamsUnoComponent {
  private _parametroPasar: string = "";

  constructor(private router : Router){}

  public get parametroPasar(): string {
    return this._parametroPasar;
  }
  public set parametroPasar(value: string) {
    this._parametroPasar = value;
  }

  mandarParam(){
    this.router.navigate(['/pasoparamdos',this._parametroPasar])
  }


}
