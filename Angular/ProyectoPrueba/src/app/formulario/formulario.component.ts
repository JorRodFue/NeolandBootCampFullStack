import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  texto: string;
  persona: Object;

  constructor() {
    this.texto = "Texto inicial";
    this.persona = {};
  }

  pulsarBoton() {
    console.table(this.persona)
  }

  pulsarReset() {
    this.persona = {}


  }
  ngOnInit() {
  }

}
