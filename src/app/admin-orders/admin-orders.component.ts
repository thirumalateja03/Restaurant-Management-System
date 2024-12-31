import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders: any[] = [];
  tableArray = {
    t1Orders: [],
    t2Orders: [],
    t3Orders: [],
    t4Orders: [],
    t5Orders: [],
    t6Orders: [],
    t7Orders: [],
    t8Orders: [],
    t9Orders: [],
  };

  orderTypes: any[] = [
    { key: 't1Orders', label: 'Type 1 Orders' },
    { key: 't2Orders', label: 'Type 2 Orders' },
    { key: 't3Orders', label: 'Type 3 Orders' },
    { key: 't4Orders', label: 'Type 4 Orders' },
    { key: 't5Orders', label: 'Type 5 Orders' },
    { key: 't6Orders', label: 'Type 6 Orders' },
    { key: 't7Orders', label: 'Type 7 Orders' },
    { key: 't8Orders', label: 'Type 8 Orders' },
    { key: 't9Orders', label: 'Type 9 Orders' }
  ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:2000/admin/readorders').subscribe({
      next: (response) => {
        this.tableArray = response;

        this.returnArr();
      },
      error: (error) => {
        console.error('Failed to load!', error);
        alert('Failed to load!. Please try again.');
      }
    });
  }

  returnArr(){
    if(this.tableArray.t1Orders.length != 0) this.orders.push({table1: this.tableArray.t1Orders});
    if(this.tableArray.t2Orders.length != 0) this.orders.push({table2: this.tableArray.t2Orders});
    if(this.tableArray.t3Orders.length != 0) this.orders.push({table3: this.tableArray.t3Orders});
    if(this.tableArray.t4Orders.length != 0) this.orders.push({table4: this.tableArray.t4Orders});
    if(this.tableArray.t5Orders.length != 0) this.orders.push({table5: this.tableArray.t5Orders});
    if(this.tableArray.t6Orders.length != 0) this.orders.push({table6: this.tableArray.t6Orders});
    if(this.tableArray.t7Orders.length != 0) this.orders.push({table7: this.tableArray.t7Orders});
    if(this.tableArray.t8Orders.length != 0) this.orders.push({table8: this.tableArray.t8Orders});
    if(this.tableArray.t9Orders.length != 0) this.orders.push({table9: this.tableArray.t9Orders});
    console.log(this.orders);
  }
}
