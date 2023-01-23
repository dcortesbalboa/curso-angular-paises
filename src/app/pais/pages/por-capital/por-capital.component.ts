import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError=false;
  
  constructor(private paisService: PaisService) { }

  termino: string='';
  paises: Pais[]=[];

  buscar(termino: string):void{
    this.termino=termino;
    this.hayError=false;
     console.log("buscando", termino); 
     this.paisService.buscarCapital(termino)
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
