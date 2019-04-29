import { ɵConsole } from '@angular/core';

export class LoggingService{
    enviaMensajeAConsola(mensaje:string){
        console.log(mensaje);
    }
}