import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-hearder',
  templateUrl: './products-hearder.component.html',
  styleUrls: ['./products-hearder.component.css']
})
export class ProductsHearderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
 
   sort = 'desc';
   itemsShowCount =12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort:string): void{
    this.sort = newSort;

  }
  onItemsUpdated(count:number): void{
    this.itemsShowCount = count;

  }

  onColumnsUpdated(colsNum:number): void{
    this.columnsCountChange.emit(colsNum)
  }
}
