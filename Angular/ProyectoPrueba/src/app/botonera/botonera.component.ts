import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  valorpantalla: string;

  constructor() {
    this.valorpantalla = ""
  }
  pincharBoton($event: any) {
    console.log("se ha pinchado", $event.target.innerText)
    let valorpinchado = $event.target.innerText
    if (valorpinchado == "=") { this.evaluar(this.valorpantalla) }
    else {
      this.valorpantalla += valorpinchado;
      return this.valorpantalla
    };
  }

  evaluar(entrada) {
    let resultado = eval(entrada)
    this.valorpantalla = resultado;
    return this.valorpantalla;
  }
  ngOnInit() {
  }

}
