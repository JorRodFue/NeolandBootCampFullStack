import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../empleado.class';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() enviado: EventEmitter<Empleado>;
  formulario: Empleado;


  constructor(
  ) {
    this.formulario = new Empleado();
    this.enviado = new EventEmitter()
  }

  ngOnInit() {
  }

  enviar() {
    console.log("formulario click")
    this.enviado.emit(this.formulario)
  }
}
