import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Heroes el primero ';
  public Descripcion:string;
  public mejor_juego:string;
  public mostrar_reto:boolean;
  public mejor_juego_retro:string;

  public colores:Array<string>; 

  //Inicializar los componentes, dar valor a las variables 
  constructor() { 
    this.Descripcion="Curso Angular";
    this.mejor_juego="pokemon";
    this.mostrar_reto=false;
    this.mejor_juego_retro="Super mario";
    this.colores=[
      'Amarrillo',
      'Verde',
      'Naranja',
      'Dorado',
      'Negro',
      'Gris',
      'Rojo',
      'Azul',
      'Rosa'
    ];

  }
  ngOnInit() {
  }

}