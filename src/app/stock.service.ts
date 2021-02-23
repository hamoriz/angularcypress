import { Injectable } from '@angular/core';
import {Stock} from './stock.model';
import {Observable, of, throwError} from 'rxjs';
import {errorObject} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocks = new Map<string, Stock>([
   [ 'BLK' , {
      ticker: 'BLK',
      name : 'Blackrock'
    }],
    [ 'MSFT' , {
      ticker: 'MSFT',
      name : 'Microsoft'
    }]]);

  constructor() { }

  getStockDetails(ticker: string): Observable<Stock> {
    if (this.stocks.get(ticker)) {
    return of(this.stocks.get(ticker));
    } else {
     return throwError('Not found');
    }
}


}
