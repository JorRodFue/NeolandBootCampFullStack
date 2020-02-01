import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() cont: string; asdas: any;
  @Output() terminaContador: EventEmitter<string>;
  interval: any;
  contador: number;

  constructor() {
    console.log("Parametro entrada", this.cont)
    this.contador = 10;
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
    this.contador = parseInt(this.cont);

  }

  comienzaContador() {
    this.resetContador()
    this.interval = setInterval(() => {
      if (this.contador > 0) this.contador--

      else {
        clearInterval(this.interval);
        this.terminaContador.emit(`el contador que empezaba en  ${this.cont} ha terminado`)
      }
      ;
      console.log(this.contador)
      return this.contador;

    }
      , 500)

  }

  resetContador() {
    this.contador = this.contador = parseInt(this.cont);
    ;
    clearInterval(this.interval);
  }




}
