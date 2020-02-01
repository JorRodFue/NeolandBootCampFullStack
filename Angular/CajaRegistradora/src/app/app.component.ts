import { Component, Output, OnInit } from '@angular/core';
import { Producto } from './producto.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CajaRegistradora';

  arrBebida: Producto[]; arrComida: Array<Producto>
  pantalla: Producto = new Producto();
  productosSeleccionados: Array<any> = []


  constructor() {
    this.arrComida = [];
    this.arrBebida = [];


  }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      let producto = new Producto("nombre " + (Math.random().toString()), Math.random() * 288, `https://picsum.photos/seed/${Math.random()}} /80?random=1`);
      this.arrComida.push(producto);

      this.arrBebida.push(new Producto("nombre " + (Math.random().toString()), Math.random() * 288, `https://picsum.photos/seed/${Math.random()}} /80?random=1`));
    }

  }

  elementoPinchado($event) {
    let cantidad: number;
    let producto: Producto;
    this.pantalla = $event;
    const encontrado = this.productosSeleccionados.find((item) => { return item.producto.nombre === $event.nombre })
    if (encontrado) { encontrado.cantidad++ }
    else this.productosSeleccionados.push({ cantidad: 1, producto: $event })
  }


}