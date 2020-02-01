import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  colorSeleccionado: string;
  activar: boolean;

  constructor() { this.colorSeleccionado = "verde" }

  ngOnInit() {
    setInterval(() => {
      this.colorSeleccionado = (this.colorSeleccionado == "verde") ? "ambar" : (this.colorSeleccionado == "ambar") ? "rojo" : "verde";
    }, 1000)
  }

  funcionCambia() {
    this.activar = !this.activar;
  }

}
