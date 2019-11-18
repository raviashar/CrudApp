import { Component } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

declare let jsPDF: any;

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  public barChartOptions: ChartOptions = {
    title: {
      display: true,
      text: 'Risk Event by Department',
      fontSize: 15,
      position: 'top'
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 15
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10,
          min: 0,
          stepSize: 1,
          fontSize: 15
        },
      }]
    },
    responsive: true,
  };

  public barChartLabel: Label[] = ['Baroda', 'Surat', 'ZZZ', 'xyz', 'abc'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartColors: Array<any> = [{ backgroundColor: ['#FF2222', "#000000", "#CCCCCC", "#66bb4a", "#00639A"] } ];
  public barChartData: ChartDataSets[] = [
    { data: [5,4,3,2,1] },
  ];

  public barChartPlugins = [{
    beforeDraw(chart) {
      const ctx = chart.ctx;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, chart.width, chart.height);
    }
  }];

  
  constructor() { }

  downloadCanvas(fileType, event) {

    let canvas = document.querySelector('#abc') as HTMLCanvasElement;
    let dataURL = canvas.toDataURL('image/png', 1.0);

    switch (fileType) {
      case 'png':
        let anchor = event.target;
        anchor.href = dataURL;
        anchor.download = "Risk-by-Control.png";
        break;

      case 'pdf':
        console.log(canvas.width + ' ' + canvas.height);
        let pdf = new jsPDF({
          orientation: 'l'
        })
        pdf.addImage(dataURL, 'png',5,15,0,140);
        pdf.save('Risk-by-Control.pdf');
        break;
    }
  }
}

//Chart.plugins.register({
//  beforeDraw: function (c: any) {
//    var ctx = c.chart.ctx;
//    ctx.fillStyle = "#FFFFFF";
//    ctx.fillRect(0, 0, c.chart.width, c.chart.height);
//    console.log(c.chart.width + ' ' + c.chart.height);
//  }
//});

