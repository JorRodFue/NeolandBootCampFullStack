import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent implements OnInit {

  resultado: String;
  formulario: any;
  tareas: Array<object>;

  constructor() {

    this.formulario = {}
    this.formulario.nombre = "por defecto desde clase"
    this.formulario.prioridad = "Baja"
    this.resultado = "";

    this.tareas = []
  }

  pulsarBoton($event: any) {
    // CREAR UN NUEVO OBJETO
    // let objeto = { nombre: this.formulario.nombre, prioridad: this.formulario.prioridad }
    // this.tareas.push(objeto);
    this.tareas.push({ ...this.formulario })
    //SE HACE PUSH POR VALOR
    console.table(this.tareas)
    this.resultado = (this.mostrarTareas(this.tareas))


  }
  mostrarTareas(lista) {
    let resultado = "<ul>";
    for (const elemento of lista) { resultado += "<li> Mensaje " + elemento.nombre + " Prioridad " + elemento.prioridad + "</li>" }
    resultado += "</ul>"
    return resultado
  }

  ngOnInit() {
  }

}
