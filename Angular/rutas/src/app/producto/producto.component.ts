import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  identificador: String;

  // 1 Inyeto activatedRoute
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Suscribirse a Params
    //esto es siempre así

    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
      this.identificador = params.idProducto;
    })
  }

}