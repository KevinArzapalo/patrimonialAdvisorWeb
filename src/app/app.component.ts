import { Component } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _cargarScripts:CargarScriptsService){
    _cargarScripts.Carga(["site"]);
  }
  title = 'patrimonialAdvisorWeb prueba';
  
}
