import { Component } from '@angular/core';
import {ChartData, ChartEvent, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // public colors : Color[] = [
  //   { backgroundColor:['#0E122E','#FFF111','#CCC111'] }
  // ]

}
