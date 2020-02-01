import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { SubrayadoDirective } from './directives/subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    NgforComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
