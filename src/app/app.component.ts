import { Component, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { forkJoin } from 'rxjs';
import { CardOneService } from './services/card-one.service';
import { CardTwoService } from './services/card-two.service';
import { CardThreeService } from './services/card-three.service';
import { CardFourService } from './services/card-four.service';
import { CardFiveService } from './services/card-five.service';
import { CardSixService } from './services/card-six.service';
import { CardSevenService } from './services/card-seven.service';
import { CardEightService } from './services/card-eight.service';
import { ToggleMenuService } from './services/toggle-menu.service';
import { SelectMenuService } from './services/select-menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chart: any;
  public barChart: any;
  title = 'dashboard';
  resOne: any;
  resTwo: any;
  resThree: any = [0, 0, 0, 0, 0];
  resFour: any = [
    { name: 'Cisco', critical: 0, major: 0, change: '0%', total: 0 },
    { name: 'Huawei', critical: 0, major: 0, change: '0%', total: 0 },
    { name: 'Juniper', critical: 0, major: 0, change: '0%', total: 0 }];
  resFive: any;
  resSix: any;
  resSeven: any;
  resEight: any;
  resSelect: any;
  resToggle: any;
  available: boolean = false;

  constructor(
    private one: CardOneService,
    private two: CardTwoService,
    private three: CardThreeService,
    private four: CardFourService,
    private five: CardFiveService,
    private six: CardSixService,
    private seven: CardSevenService,
    private eight: CardEightService,
    private select: SelectMenuService,
    private toggle: ToggleMenuService
  ) {
  }

  ngOnInit() {
    const one$ = this.one.get();
    const two$ = this.two.get();
    const three$ = this.three.get();
    const four$ = this.four.get();
    const five$ = this.five.get();
    const six$ = this.six.get();
    const seven$ = this.seven.get();
    const eight$ = this.eight.get();
    const toggle$ = this.toggle.get();
    const select$ = this.select.get();

    forkJoin([one$, two$, three$, four$, five$, six$, seven$, eight$, toggle$, select$]).subscribe(result => {
      this.resOne = result[0];
      this.resTwo = result[1];
      this.resThree = result[2];
      this.resFour = result[3];
      this.resFive = result[4];
      this.resSix = result[5];
      this.resSeven = result[6];
      this.resEight = result[7];
      this.resToggle = result[8];
      this.resSelect = result[9];
      this.available = true;
      this.charts();
    });
  }
  per(min: number, max: number, value: number) {

    return value / (max - min) * 100;
  }
  charts() {
    this.chart = new Chart("pieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Critcal', 'Major', 'Minor', 'Warning', 'Indeterminate'],
        datasets: [{
          data: this.resThree,
          backgroundColor: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue'
          ],
          hoverOffset: 4
        }],
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }

    });

    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Cisco', 'Huawei', 'Juniper'],
        datasets: [
          {
            label: 'Critical',
            data: [this.resFour[0]?.critical, this.resFour[1]?.critical, this.resFour[2]?.critical],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
          },
          {
            label: 'Major',
            data: [this.resFour[0]?.major, this.resFour[1]?.major, this.resFour[2]?.major],
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            stacked: true
          },
          y: {
            stacked: true
          }
        }
      }
    });

  }
}
