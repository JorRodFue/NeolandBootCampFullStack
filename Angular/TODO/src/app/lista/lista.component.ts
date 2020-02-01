import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea.class';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() listaTareas: Array<Tarea>

  constructor() { }

  ngOnInit() {

  }


  cambiarEstado(tarea: Tarea) {

    tarea.completa = !tarea.completa
  }

  borrarTarea(tarea: Tarea) {

    let posicion = this.listaTareas.indexOf(tarea)
    this.listaTareas.splice(posicion, 1);
    console.table(this.listaTareas)
  }

}
