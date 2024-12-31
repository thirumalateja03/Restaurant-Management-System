import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ItemPopupComponent } from '../item-popup/item-popup.component';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.css']
})
export class MenucardComponent implements OnInit {
  tableNumber: string | undefined;
  menuItems: any[] = [];
  totalPrice: number = 0;
  
  set1: any[] = [];
  set2: any[] = [];
  set3: any[] = [];
  set4: any[] = [];
  set5: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tableNumber = params['table'];
    });

    this.http.get<any[]>('http://localhost:2000/read').subscribe(menuItems => {
      this.menuItems = menuItems.map(item => ({ ...item, selected: false }));

      for (let index = 0; index < this.menuItems.length; index++) {
        const element = this.menuItems[index];
        
        if(element.subgroup === 'Bursting fruit boba tea'){
          this.set1.push(element);
        }else if(element.subgroup === 'Classic Milk Tea'){
          this.set2.push(element);
        }else if(element.subgroup === 'Tropical Delight Tea'){
          this.set3.push(element);
        }else if(element.subgroup === 'Fruit Milk Tea')
          this.set4.push(element);
        else
          this.set5.push(element);
      }
    });
  }

  toggleSelected(index: number): void {
    const item = this.menuItems[index];
    item.selected = !item.selected;
    this.totalPrice += item.selected ? item.s350 : -item.s350;
  }

  openPopup(item: any): void {
    const dialogRef = this.dialog.open(ItemPopupComponent, {
      width: '80vh',
      height: '80vh',
      data: { ...item, tno : this.tableNumber}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
