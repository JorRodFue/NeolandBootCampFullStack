import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea.class';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() enviado: EventEmitter<Tarea>

  nuevaTarea: Tarea;
  formulario: any;
  constructor() {
    this.formulario = { mensaje: "Tarea", prioridad: "BAJA" }
    this.enviado = new EventEmitter();
  }
  enviar() {
    console.log("pinchado enviar")
    this.nuevaTarea = new Tarea(this.formulario.mensaje, this.formulario.prioridad)
    this.enviado.emit(this.nuevaTarea)
  }

  ngOnInit() { }
}
