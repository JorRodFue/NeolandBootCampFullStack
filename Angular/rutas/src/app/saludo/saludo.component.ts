import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  mensaje: String;

  // 1 Inyeto activatedRoute
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Suscribirse a Params
    //esto es siempre así

    this.activatedRoute.params.subscribe((params) => {
      this.mensaje = params.saludo;
    })
  }

}
