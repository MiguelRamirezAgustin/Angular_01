import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { PersonaListadoComponent } from './persona-listado/persona-listado.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PersonaComponent,
    PersonasComponent,
    ListadoPersonasComponent,
    PersonaListadoComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
