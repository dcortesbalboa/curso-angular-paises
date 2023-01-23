import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { catchError, of } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  hayError=false;
  constructor(private paisService: PaisService) { }

  termino: string='';
  paises: Pais[]=[];

  buscar(termino: string):void{
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
    this.hayError=false;
    
    console.log("sugerencia", termino);
  }

}
