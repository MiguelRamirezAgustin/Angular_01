import { Component } from "@angular/core";

@Component({
      selector:'app-personas',
      templateUrl:'/personas.component.html',
      styleUrls:['/personas.component.css']
})

export class PersonasComponent{
      agregarPersonas = false
      agregarPersonaStatus="No se agrego la persona";
      tituloPersona=" ingeniero ";
      personaCreada=false;

      constructor(){
            setTimeout(() => {
                  this.agregarPersonas=true;
            }, 3000);
      }

      onCrearPersona(){
            this.personaCreada=true;
            this.agregarPersonaStatus="Agrego persona";
      }
      onModificarPersona(event: Event){
           this.tituloPersona=(<HTMLInputElement>event.target).value;
      }
}