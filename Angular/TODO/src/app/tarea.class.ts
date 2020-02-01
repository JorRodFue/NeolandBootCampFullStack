import { Component } from '@angular/core';

@Component({
    selector: 'tarea',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class Tarea {
    title = 'TODO';
    mensaje: string;
    prioridad: string;
    completa: boolean = false;

    constructor(mensaje: string, prioridad: string) {
        this.mensaje = mensaje;
        this.prioridad = prioridad;
        // this.completa = false;
    }
}