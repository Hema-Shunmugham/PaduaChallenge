import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Data } from '../_model';
import { DataService} from "../_service";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit  {
  balanceData: Data[] = [];

  // Array of different segments in chart
  public lineChartData: ChartDataSets[] = [];

  //Labels shown on the x-axis
  public lineChartLabels: Label[] = [];

  // Define chart options
  public lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  public lineChartColors: Color[] = [

    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  public lineChartLegend = true;

  // Define type of chart
  public lineChartType: ChartType =  "line";

  public lineChartPlugins = [];

  constructor( private dataService: DataService) {}

  ngOnInit(): void {
    this.balanceData = this.dataService.getData();
    this.transformData(this.balanceData);
  }

  private transformData(data: any): void {
    let xAxes: any[] = []
    let yAxes: any[] = [];
    let series: any = {};
    series["label"] = 'End Balance';
    series["data"] = [];
    data.forEach((item: { [n: number]: unknown; } | ArrayLike<unknown>)  =>{
      for (const [key, value] of Object.entries(item)){
        if (key === 'year'){
          xAxes.push(value);

        }
        if (key === 'endBalance'){
          series["data"].push(value);
        }
      }
    })
    yAxes.push(series);
    this.lineChartLabels = xAxes;
    this.lineChartData = yAxes;
  }

}
