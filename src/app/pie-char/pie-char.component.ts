import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-char',
  templateUrl: './pie-char.component.html',
  styleUrls: ['./pie-char.component.css'],
})
export class PieCharComponent implements OnInit{
  public chart: any;
  public itemdata: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:2000/admin/count3').subscribe({
      next: (response) => {
        this.itemdata = response;

        this.createChart();
      },
      error: (error) => {
        console.error('Failed to load!', error);
        alert('Failed to load!. Please try again.');
      }
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie',

      data: {
        labels: [],
        datasets: [
          {
            data: this.itemdata,
            backgroundColor: ['#C33726', '#b85932', '#35DC8F', '#3CA9EE'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 0.5,
      },
    });
  }
}
