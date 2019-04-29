import { Persona } from '../listado-personas/persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona("Juan", "Perez"),
        new Persona("Laura", "Juarez")];

    Saludar = new EventEmitter<number>();
    constructor(public logginService: LoggingService) {

    }
    agregarPersona(persona: Persona) {
        this.personas.push(persona);
        this.logginService.enviaMensajeAConsola('Mensaje en servicio  ' + JSON.stringify(persona));
    }
}