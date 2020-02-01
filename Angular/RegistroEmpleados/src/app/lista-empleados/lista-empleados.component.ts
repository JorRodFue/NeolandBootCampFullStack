import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleado.class';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  @Input() listaEmpleados: Array<Empleado>;
  constructor() { }

  ngOnInit() {
  }

}
