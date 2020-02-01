import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reloj',
  templateUrl: './reloj.component.html',
  styles: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() segundos: string;
  @Input() identificador: string;
  @Output() avisar: EventEmitter<Object>


  segundosV: number = 33;
  relojVista: Object = {}
  colorSeleccionado: string;

  constructor() {
    this.segundosV = 0;
    this.relojVista = {}
    this.avisar = new EventEmitter();
    this.colorSeleccionado = ""
  }

  ngOnInit(

  ) {
    //SI QUIERO QUE VENGA POR PARAMETRO
    this.segundosV = parseInt(this.segundos);
    this.mostrarReloj()
    this.empezarReloj()

  }

  empezarReloj() {
    let empezar = setInterval(() => {
      if (this.segundosV > 0) {
        this.segundosV--

        this.mostrarReloj()
        if (this.segundosV === 30) {
          this.avisar.emit({ identificador: this.identificador, tiempo: "30" })
          this.colorSeleccionado = "verde"
          console.log("generado aviso")
        }
      }
      else clearInterval(empezar)
    }, 1000)
  }
  mostrarReloj() {
    let horasVista = (Math.floor(this.segundosV / 3600)).toString().padStart(2, "0");
    let minutosVista = (Math.floor(this.segundosV / 60) % 60).toString().padStart(2, "0");
    let segundosVista = (this.segundosV % 60).toString().padStart(2, "0");

    this.relojVista = { hora: horasVista, minutos: minutosVista, segundos: segundosVista }

  }

}
