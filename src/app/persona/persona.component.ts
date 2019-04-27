import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public nombre:string;
  public apellidos:string;
  public edad:number

  constructor() { 
   this.nombre="Miguel";
   this.edad=20,
   this.apellidos="Ramirez"
  }

  ngOnInit() {
  }

}
