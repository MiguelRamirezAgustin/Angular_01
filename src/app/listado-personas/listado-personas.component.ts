import { Component, OnInit } from '@angular/core';
import {Persona} from './persona.model';

import { from } from 'rxjs';
import { LoggingService } from '../persona/LoggingService.service';
import { PersonasService } from '../persona/personas_service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent  {

  titulo='Listado de personas';
  personas: Persona[] = [];

  constructor(private MensajeListadoPersona:LoggingService,
             private personasService: PersonasService,
            ) 
             { 
  }

  ngOnInit():void{
   this.personas=this.personasService.personas;
   }

  
 
}
