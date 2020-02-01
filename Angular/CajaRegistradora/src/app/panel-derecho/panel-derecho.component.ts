import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto.class';

@Component({
  selector: 'app-panel-derecho',
  templateUrl: './panel-derecho.component.html',
  styleUrls: ['./panel-derecho.component.css']
})
export class PanelDerechoComponent implements OnInit {
  @Input() pantalla: Producto;
  @Input() arrayProductos: any;
  constructor() { }

  ngOnInit() {
    console.log(this.arrayProductos)
    console.log(this.pantalla)
    console.log("entramos")
  }

}
