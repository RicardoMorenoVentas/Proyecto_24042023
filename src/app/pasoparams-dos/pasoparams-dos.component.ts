import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasoparams-dos',
  templateUrl: './pasoparams-dos.component.html',
  styleUrls: ['./pasoparams-dos.component.css']
})
export class PasoparamsDosComponent implements OnInit {

  private _mostrarTexto: string = "";

  constructor(private routerActivo : ActivatedRoute){}

  ngOnInit(): void {
    this._mostrarTexto = this.routerActivo.snapshot.params['id']
  }

  public get mostrarTexto(): string {
    return this._mostrarTexto;
  }
  public set mostrarTexto(value: string) {
    this._mostrarTexto = value;
  }
}
