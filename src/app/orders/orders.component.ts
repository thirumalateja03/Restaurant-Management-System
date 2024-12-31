import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  tableNumber: string | undefined;
  orders: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tableNumber = params['table'];
    });

    this.http.post<any>('http://localhost:2000/orders', {tableno: this.tableNumber}).subscribe({
      next: (response) => {
        this.orders = response;
      },
      error: (error) => {
        console.error('Failed to add item to cart:', error);
        alert('Failed to add item to cart. Please try again.');
      }
    });
  }

  showPopup() {
    this.snackBar.open('Sorry, you cant edit', 'Close', {
      duration: 2000,
    });
  }
}
