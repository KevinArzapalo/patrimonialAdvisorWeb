import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO Servicios
import { CargarScriptsService } from './cargar-scripts.service';
//FIN Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainInformationComponent } from './pages/main-information/main-information.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SeguroProfesionalComponent } from './pages/seguro-profesional/seguro-profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    MainLayoutComponent,
    MainInformationComponent,
    FooterComponent,
    SeguroProfesionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
