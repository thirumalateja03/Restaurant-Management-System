import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-popup',
  templateUrl: './item-popup.component.html',
  styleUrls: ['./item-popup.component.css'],
})
export class ItemPopupComponent {
  quantity: number = 1;
  tapiocaStatus: number = 1;
  poppins: any[] = [];
  poppinsSelected: any[] = [];
  selectedSize: string = '350ml';
  tapiocaSelectedOption: string = 'yes';
  additionalNote: string = '';
  itemPrice: number = this.data.s350;
  tropicalStatus: boolean = false;
  tropicaltype: string = 'none';


  constructor(
    public dialogRef: MatDialogRef<ItemPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:2000/readpoppins')
      .subscribe((poppins) => {
        this.poppins = poppins.map((item) => ({ ...item, selected: false }));
      });

    if(this.data.subgroup === 'Tropical Delight Tea') {
      this.tropicalStatus = true;
      this.tropicaltype = 'Soda';
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  toggleSelected(index: number): void {
    const item = this.poppins[index];
    if (this.checkPoppinExist(item)) {
      let idToRemove = item._id; // ID of the element to remove
      this.poppinsSelected = this.poppinsSelected.filter((item) => item._id !== idToRemove);
      this.itemPrice -= 60;
    } else {
      this.poppinsSelected.push(item);
      this.itemPrice += 60;
    }
    item.selected = !item.selected;
  }

  checkPoppinExist(item: any): boolean {
    for (let index = 0; index < this.poppinsSelected.length; index++) {
      const element = this.poppinsSelected[index];
      if (element._id === item._id) {
        return true;
      }
    }
    return false;
  }

  addToCart(): void {
    const item = {
      tno: this.data.tno,
      itemdid: this.data._id,
      itemPrice: this.itemPrice,
      itemsize: this.selectedSize,
      itemquantity: this.quantity,
      tapiocastatus: this.tapiocaSelectedOption,
      poppins: this.poppinsSelected,
      note: this.additionalNote,
      tropicaltype: this.tropicaltype
    };
    this.http.post<any>('http://localhost:2000/add-to-cart', item).subscribe({
      next: (response) => {
        console.log('Item added to cart:', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Failed to add item to cart:', error);
        alert('Failed to add item to cart. Please try again.');
      },
    });
    this.dialogRef.close();
  }

  selectSize(size: string): void {
    this.selectedSize = size;
    this.selectedSize === '350ml'
      ? (this.itemPrice = this.data.s350)
      : (this.itemPrice = this.data.s500);
  }

  tropicalTypeSelection(type: string): void {
    this.tropicaltype = type;
  }
}
