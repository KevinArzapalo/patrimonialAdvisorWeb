import { Component, OnInit } from '@angular/core';
//import { CargarScriptsService } from '/src/app/cargar-scripts.service.';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.css']
})
export class MainInformationComponent implements OnInit {

  constructor(private _cargarScripts:CargarScriptsService){
    _cargarScripts.Carga(["site"]);
  }
  title = 'patrimonialAdvisorWeb prueba';

  ngOnInit(): void {
  }

}
