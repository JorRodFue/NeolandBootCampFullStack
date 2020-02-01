import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea.class';

@Component({
  selector: 'app-percha',
  templateUrl: './percha.component.html',
  styleUrls: ['./percha.component.css']
})
export class PerchaComponent implements OnInit {


  listaTareas: Array<Tarea> = [];

  constructor() {
    // this.listaTareas = []
  }

  ngOnInit(): void { }

  procesarEnvio($event) {
    this.listaTareas.push($event)
    this.listaTareas = this.listaTareas.filter(function (item) { return true })
    console.table(this.listaTareas)
  }
}
