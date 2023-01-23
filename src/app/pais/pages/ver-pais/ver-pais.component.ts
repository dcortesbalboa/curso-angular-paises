import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.model';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  constructor(private activatedRoute: ActivatedRoute,
            private paisService: PaisService ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id})=>{
    //   console.log(id);
    //   this.cargarPais(id);
    // })

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.paisService.buscarPorCodigo( id)),
      tap(console.log)
    ).subscribe( paises=>{
      this.pais=paises[0];
    })
  }  

  cargarPais(id: string){
    this.paisService.buscarPorCodigo(id).subscribe(paises=>{
      this.pais=paises[0];
      console.log(this.pais);

    })
  }



}
