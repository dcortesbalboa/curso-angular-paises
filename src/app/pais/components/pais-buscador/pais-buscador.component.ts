import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-pais-buscador',
  templateUrl: './pais-buscador.component.html',
  styles: [
  ]
})
export class PaisBuscadorComponent implements OnInit {

  @Input() placeHholder: string='';
  @Output() onBuscar: EventEmitter<string>=new EventEmitter();
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();
  
  debouncer: Subject<string>=new Subject();

  termino: string='';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( texto=>{
      this.onDebounce.emit(texto);
    })
  }

  buscar(){
    this.onBuscar.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
