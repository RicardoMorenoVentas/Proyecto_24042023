import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-padrehijo',
  templateUrl: './hijo-padrehijo.component.html',
  styleUrls: ['./hijo-padrehijo.component.css']
})
export class HijoPadrehijoComponent {
  @Input() atribPadre : string = "";
}
