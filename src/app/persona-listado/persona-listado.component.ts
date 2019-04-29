import { Component, OnInit, Input } from '@angular/core';
import { Persona} from '../listado-personas/persona.model';
import { PersonasService } from '../persona/personas_service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css']
})
export class PersonaListadoComponent implements OnInit {
  //pasar informacion 
  @Input() persona: Persona;
  @Input() indice :number;

  constructor( private personasService:PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasService.Saludar.emit(this.indice);
  }
}
