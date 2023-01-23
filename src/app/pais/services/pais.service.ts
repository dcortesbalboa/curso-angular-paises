import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pais } from '../interfaces/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl='https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.bucarGeneral( url)
      //      .pipe(
      //   catchError((error)=>{
      //     return of([]);
      //   })
      //  )
  }

  buscarCapital(termino: string): Observable<Pais[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.bucarGeneral( url)
      //      .pipe(
      //   catchError((error)=>{
      //     return of([]);
      //   })
      //  )
  }

  buscarPorCodigo(termino: string): Observable<Pais[]>{
    const url=`${this.apiUrl}/alpha/${termino}`;
    return this.bucarGeneral( url)
  }

  buscarPorRegion(region: string){
    const url=`${this.apiUrl}/region/${region}`;
    return this.bucarGeneral( url)
  }

  private bucarGeneral(url: string): Observable<Pais[]>{
      const params=new HttpParams()
      .set("fields", "name,capital,flags,population,ccn3,cca2,translations" )

      // return this.httpClient.get<Pais[]>( url, {params})
      return this.httpClient.get<Pais[]>( url)
  }
}
