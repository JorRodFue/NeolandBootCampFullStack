import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Se puede destruir';
  valorInput: any;
  estiloParrafo: any;
  departamento: string = "Tecnología";

  constructor() {
    this.estiloParrafo = {
      color: "white",
      backgroundColor: "black",
      fontSize: "22px"
    }
  }

  ngOnInit() { this.departamento = "ogar" };

  // setTimeout(() => this.estiloParrafo.color = this.valorInput, 3000)


  cambioFuente(event) {
    // console.log(event.target.value)
    // this.estiloParrafo.fontSize = event.target.value + "px";

  }
}
