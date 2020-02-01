import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoPrueba';

  valor: string;
  constructor() {
    this.valor = "39"
  }

  manejarFinContador($event) {
    console.log($event)
  }
}
