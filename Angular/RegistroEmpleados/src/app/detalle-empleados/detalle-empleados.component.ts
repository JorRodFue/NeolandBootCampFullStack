import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleado.class';

@Component({
  selector: 'app-detalle-empleados',
  templateUrl: './detalle-empleados.component.html',
  styleUrls: ['./detalle-empleados.component.css']
})
export class DetalleEmpleadosComponent implements OnInit {

  @Input() empleado: Empleado;
  constructor() { }

  ngOnInit() {
  }

}
