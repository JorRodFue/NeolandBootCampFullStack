import { Component } from '@angular/core';
import { Empleado } from './empleado.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistroEmpleados';


  listaEmpleados = new Array<Empleado>()
  constructor() { }


  formularioEnviado($event) {

    $event.imagen = `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`
    this.listaEmpleados.push({ ...$event })


  }
}
