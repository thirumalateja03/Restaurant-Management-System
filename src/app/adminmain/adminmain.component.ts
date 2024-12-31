import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css'],
})
export class AdminmainComponent {
  itemdata = [];
  ml500 = 0;
  ml350 = 0;
  height: number = 0;
  target: number = 10000;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:2000/admin/readml').subscribe({
      next: (response) => {
        this.itemdata = response;

        this.ml500 = response[1];
        this.ml350 = response[0];

        this.updateHeight(this.ml350*300 + this.ml500*500);
      },
      error: (error) => {
        console.error('Failed to load!', error);
        alert('Failed to load!. Please try again.');
      }
    });
  }

  updateHeight(newHeight: number) {
    if(newHeight < this.target){
      var percent: number = (newHeight/this.target)*100;
      this.height = 300 - 300*(percent/100);
    }else{
      alert("Completed");
    }
  }
}
