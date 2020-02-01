import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { SumaComponent } from './suma/suma.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TODOComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    SumaComponent,
    CalculadoraComponent,
    BotoneraComponent,
    FormularioComponent,
    TODOComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
