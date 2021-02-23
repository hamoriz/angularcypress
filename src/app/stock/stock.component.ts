import {Component, Input, OnChanges, OnInit} from '@angular/core';

import {StockService} from '../stock.service';
import {Stock} from '../stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnChanges{

  @Input() ticker: string;

  stock: Stock | undefined;
  errorMessage = '';

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getStock(this.ticker);
  }

  getStock(ticker: string): void {
    this.stockService.getStockDetails(ticker).subscribe({
      next: stock => {
        this.stock = stock;
        console.log('New stock value:' + this.stock.ticker);
      },
      error: err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      }
  }
    );
  }
}
