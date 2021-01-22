import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage6',
  templateUrl: './manage6.component.html',
  styleUrls: ['./manage6.component.css']
})
export class Manage6Component implements OnInit {
  updateOption1 = {};
  chartOption1 = {};
  baseUrl = 'http://192.168.43.151:3000/';

  constructor(private httpClient: HttpClient) {

  }

  public xAxis1 = [];
  public temps1 = [];

  ngOnInit() {
    this.chartOption1 = {
      title: {
        text: '温度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['温度']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: []
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '温度',
          type: 'line',
          stack: '度',
          areaStyle: { normal: {} },
          data: []
        },
      ]
    };
    timer(3000, 3000).subscribe(
      () => {
        this.httpClient.get(this.baseUrl + 'env1/002/10', {}).subscribe(
          (value: any) => {
            console.log(value.data);
            if (value && value.data && value.data.length) {
              let i = value.data.length - 1;
              for (let item of value.data) {
                const d = new Date(Number(item.time));
                //console.log(d)
                this.xAxis1[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis1[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis1[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.temps1[i] = (item.temp1);
                i--;
              }
              this.updateOption1 = {
                xAxis: [
                  {
                    data: this.xAxis1
                  }
                ],
                series: [{
                  data: this.temps1
                },]
              }
            }
          }
        )
      }
    );
  }


}
