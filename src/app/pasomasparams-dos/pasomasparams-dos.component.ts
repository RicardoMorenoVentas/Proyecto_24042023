import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasomasparams-dos',
  templateUrl: './pasomasparams-dos.component.html',
  styleUrls: ['./pasomasparams-dos.component.css']
})
export class PasomasparamsDosComponent implements OnInit{
  private _editable: boolean | undefined;
  private _id: string = "";

  constructor(private activeRoute : ActivatedRoute){}

  ngOnInit(): void {
      this.activeRoute.queryParams.forEach(params => {
        this._id = params['id']
        this._editable = params['editable']
      })
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get editable(): boolean | undefined {
    return this._editable;
  }
  public set editable(value: boolean | undefined) {
    this._editable = value;
  }
}
