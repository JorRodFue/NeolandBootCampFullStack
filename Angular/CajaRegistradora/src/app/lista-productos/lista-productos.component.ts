import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto.class';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: String;
  @Input() productos: Array<Producto>;
  @Output() productoPinchado: EventEmitter<Producto> = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit() { }

  elementoPinchado(producto: Producto) {
    this.productoPinchado.emit(producto);


  }

}
