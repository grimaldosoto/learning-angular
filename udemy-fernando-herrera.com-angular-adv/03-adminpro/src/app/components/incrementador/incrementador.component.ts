import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  progreso: number = 50;

  get gerPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.progreso = 100;
    }
    else if(this.progreso <= 0 && valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = this.progreso + valor;

    }
    console.log(this.progreso);
  }

}
