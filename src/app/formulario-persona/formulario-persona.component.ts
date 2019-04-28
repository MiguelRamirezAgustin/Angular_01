import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Persona} from '../listado-personas/persona.model';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  //se comenta para usar refrerencias locales
  // nombreInput:string;
  // apellidoInput:string;
  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
    let persona1=new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
   }

}
