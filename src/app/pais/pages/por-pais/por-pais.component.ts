import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { catchError, of } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{ cursor: pointer}
    `
  ]
})
export class PorPaisComponent  {

  hayError=false;
  constructor(private paisService: PaisService) { }

  termino: string='';
  paises: Pais[]=[];
  paisesSugeridos: Pais[]=[];

  buscar(termino: string):void{
    this.paisesSugeridos=[];
    this.termino=termino;
    this.hayError=false;
     console.log("buscando", termino); 
     this.paisService.buscarPais(termino)
     .subscribe((resp)=>{
        this.paises=resp;
     },
     (err)=>{
      this.hayError=true;
      this.paises=[];
     });

    //  this.paisService.buscarPais(this.termino)
    //    .pipe(
    //     catchError((error)=>{
    //       this.hayError=true;
    //       return of([]);
    //     })
    //    )
  }

  sugerencias( termino: string){
    this.termino=termino;
    this.hayError=false;
    this.paisesSugeridos=[];
    this.paisService.buscarPais(termino)
      .subscribe(paises=> this.paisesSugeridos=paises.splice(0,5));
  }

}
