import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida:EventEmitter<number> = new EventEmitter();



  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      this.progreso = 100;
    }
    else if(this.progreso <= 0 && valor <= 0){
      this.valorSalida.emit(0);
      this.progreso = 0;
    }else{
      this.valorSalida.emit(this.progreso);
      this.progreso = this.progreso + valor;

    }
    console.log(this.progreso);
  }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

}
