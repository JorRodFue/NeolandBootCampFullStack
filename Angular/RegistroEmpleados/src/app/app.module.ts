import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { DetalleEmpleadosComponent } from './detalle-empleados/detalle-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaEmpleadosComponent,
    DetalleEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
