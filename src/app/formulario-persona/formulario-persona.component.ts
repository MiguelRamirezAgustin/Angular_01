import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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

  //viewChildre
  @ViewChild('nombreInput') nombreInputChildre:ElementRef;
  @ViewChild('apellidoInput') apellidoInputchildre:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1=new Persona(this.nombreInputChildre.nativeElement.value,
                            this.apellidoInputchildre.nativeElement.value);
    this.personaCreada.emit(persona1);
   }

}
