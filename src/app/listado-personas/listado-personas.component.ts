import { Component, OnInit } from '@angular/core';
import {Persona} from './persona.model';

import { from } from 'rxjs';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent  {

  titulo='Listado de personas';
  personas: Persona[] = [];

  nombreInput:string;
  apellidoInput:string;

  constructor() { 
  }


  onAgregarPersona(){
   let persona1=new Persona(this.nombreInput, this.apellidoInput);
   this.personas.push(persona1);
  }

}
