import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  identificador: string;
  mensaje: string;
  property: string;



  constructor() {
    this.mensaje = "Mensaje de prueba"
    this.identificador = "identificador"
    this.property = "id"
  }

  devolverNuevoMensaje(texto = ""): string { return this.mensaje + " desde funcion " + texto }
  botonPulsado($event) { return ($event.screenX) }

  ngOnInit() {
  }

}
