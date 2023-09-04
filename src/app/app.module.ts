import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO Servicios
import { CargarScriptsService } from './cargar-scripts.service';
//FIN Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
