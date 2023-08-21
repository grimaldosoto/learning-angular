import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input('title') titleDoughnut: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
]
  @Input('data') data:number[] = [350, 450, 100]

  public doughnutChartData: ChartData<'doughnut'> =  {
    // labels: this.doughnutChartLabels,
    datasets: [
    //   {
    //     data: this.data,
    //     backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    //   }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartData =  {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#6857E6', '#009FEE', '#F02059']
        }
      ],
    };
  }

}
