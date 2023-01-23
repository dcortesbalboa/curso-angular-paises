import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-regions',
  templateUrl: './por-regions.component.html',
  styles: [`
    button {margin-right: 5px;}
  `
  ]
})
export class PorRegionsComponent implements OnInit {

  regionActiva: string='';
  paises:Pais[]=[];
  regiones: string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(region: string){
    if(region!==this.regionActiva){
          this.paises=[];
    this.regionActiva=region;
    console.log(region);
    this.paisService.buscarPorRegion(region)
      .subscribe(paises=> this.paises=paises )
    }

  }

  cssClass(region: string):string{
    return (region===this.regionActiva) ? 'btn-primary' : 'btn-outline-primary'
  }


}
