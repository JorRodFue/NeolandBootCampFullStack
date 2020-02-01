import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: any;
  @Input() num2: any;
  suma: number;
  constructor() {
    this.num1 = 3;
    this.num2 = 4;

  }

  sumar(num1, num2) {
    this.suma = parseInt(num1) + parseInt(num2);
    return this.suma;
  }

  ngOnInit() {
  }

}
