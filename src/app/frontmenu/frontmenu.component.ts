import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontmenu',
  templateUrl: './frontmenu.component.html',
  styleUrls: ['./frontmenu.component.css']
})
export class FrontmenuComponent {
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
    private http: HttpClient
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
}
