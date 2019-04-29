import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../listado-personas/persona.model';
import { LoggingService } from '../persona/LoggingService.service';
import { PersonasService } from '../persona/personas_service';


@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css'],
  providers: [LoggingService],
})
export class FormularioPersonaComponent implements OnInit {

  // @Output() personaCreada = new EventEmitter<Persona>();

  //se comenta para usar refrerencias locales
  // nombreInput:string;
  // apellidoInput:string;

  //viewChildre
  @ViewChild('nombreInput') nombreInputChildre: ElementRef;
  @ViewChild('apellidoInput') apellidoInputchildre: ElementRef;

  constructor(private logginService: LoggingService,
              private personaService: PersonasService) {
                this.personaService.Saludar.subscribe(
                  (indice: number)=> alert('el indice es ' + indice)
                );

  }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInputChildre.nativeElement.value,
      this.apellidoInputchildre.nativeElement.value);
   // this.logginService.enviaMensajeAConsola('Enviamos persona___ ' + JSON.stringify(persona1));
    this.personaService.agregarPersona(persona1);
   // this.personaCreada.emit(persona1);
  }

}
