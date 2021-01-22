import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  baseUrl = 'http://192.168.43.151:8848/';
  led: number;
  fan: number;
  heat: number;
  humi: number;

  updateOption = {};
  chartOption = {};

  timer: any;

  temp = 0;
  humd = 0;

  constructor(private httpclient: HttpClient) { }

  public xAxis = [];
  public temps = [];
  public humds = [];

  ngOnInit(): void {
    this.time();
    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getled').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.led = 1
        } else {
          this.led = 0
        }
      })
    });


    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getfan').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.fan = 1
        } else if (value[0].value == 2) {
          this.fan = 2
        } else {
          this.fan = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getheat').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.heat = 1
        } else {
          this.heat = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'gethumi').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.humi = 1
        } else {
          this.humi = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getinfo').subscribe((value: any) => {
        // this.temp = value[0].value;
        //console.log(value[0].temp);
        this.temp = value[0].temp;
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getinfo').subscribe((value: any) => {
        // this.temp = value[0].value;
        //console.log(value[0].humd);
        this.humd = value[0].humd;
      })
    });


    /*     this.chartOption = {
          title: {
            text: '温湿度跟踪图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['温度', '湿度']
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
            {
              name: '湿度',
              type: 'line',
              stack: '%',
              areaStyle: { normale: {} },
              data: []
            },
          ]
        };
        timer(2000, 2000).subscribe(
          () => {
            this.httpclient.get(this.baseUrl + 'env/001/10', {}).subscribe(
              (value: any) => {
                console.log(value.data);
                if (value && value.data && value.data.length) {
                  let i = value.data.length - 1;
                  for (let item of value.data) {
                    const d = new Date(Number(item.time));
                    //console.log(d)
                    this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                    this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                    this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                    this.temps[i] = (item.temp);
                    this.humds[i] = (item.humd);
                    i--;
                  }
                  this.updateOption = {
                    xAxis: [
                      {
                        data: this.xAxis
                      }
                    ],
                    series: [{
                      data: this.temps
                    }, {
                      data: this.humds
                    },]
                  }
                }
              }
            )
          }
        ); */


  }

  time() {
    var d = new Date(),
      str = '';
    str += d.getFullYear() + '年';
    str += d.getMonth() + 1 + '月';
    str += d.getDate() + '日';
    str += d.getHours() + ':';
    str += d.getMinutes() + ':';
    str += d.getSeconds();
    document.getElementById("time").innerHTML = str;
    setInterval(this.time, 1000);
  }

  turnonled() {
    const obj = {
      status: 1
    }
    this.httpclient.put(this.baseUrl + 'alisetled', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('灯已打开!');
      }
    })
  }

  turnoffled() {
    const obj = {
      status: 0
    }
    this.httpclient.put(this.baseUrl + 'alisetled', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('灯已关闭!');
      }
    })
  }

  turnonheat() {
    const obj = {
      status: 1
    }
    this.httpclient.put(this.baseUrl + 'alisetheat', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('加热器已打开!');
      }
    })
  }

  turnoffheat() {
    const obj = {
      status: 0
    }
    this.httpclient.put(this.baseUrl + 'alisetheat', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('加热器已关闭!');
      }
    })
  }

  turnonhumi() {
    const obj = {
      status: 1
    }
    this.httpclient.put(this.baseUrl + 'alisethumi', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('加湿器已打开!');
      }
    })
  }

  turnoffhumi() {
    const obj = {
      status: 0
    }
    this.httpclient.put(this.baseUrl + 'alisethumi', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('加湿器已关闭!');
      }
    })
  }

  turnofffan() {
    const obj = {
      status: 0
    }
    this.httpclient.put(this.baseUrl + 'alisethfan', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('风扇已关闭!');
      }
    })
  }

  turnlowfan() {
    const obj = {
      status: 1
    }
    this.httpclient.put(this.baseUrl + 'alisethfan', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('风扇低档运行!');
      }
    })
  }

  turnhighfan() {
    const obj = {
      status: 2
    }
    this.httpclient.put(this.baseUrl + 'alisethfan', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('风扇高档运行!');
      }
    })
  }

}
