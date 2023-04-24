import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  holaMundo(): string {
    return "Hola mundo";
  }
}
