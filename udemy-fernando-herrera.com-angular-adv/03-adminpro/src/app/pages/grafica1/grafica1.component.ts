import { Component } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labels1: string[]=[
    'PAn ',
    'Refresco ',
    'Tacos ',
  ]
  public data1= [10, 15, 40]

  labels2: string[]=[
    'Anime',
    'Live Action',
    'Terror',
  ]
  public data2= [100, 10, 50]

}
