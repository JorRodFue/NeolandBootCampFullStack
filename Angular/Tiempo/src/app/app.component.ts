import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tiempo';
  avisos: Array<object> = [];

  // ¿INICIALIZAR VARIABLES EN LA DECLARACION DA SIDA???

  constructor() {

    // this.avisos = []
  }

  ngOnInit() { }

  manejarAviso($event) {
    console.log(this.avisos)
    this.avisos.push($event)
  }
}
