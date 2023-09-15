import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO Servicios
import { CargarScriptsService } from './cargar-scripts.service';
//FIN Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
