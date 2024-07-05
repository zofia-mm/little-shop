import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService
{
  createDb()
  {
    const products = [
      { id: 1, name: 'red candle', price: 10 },
      { id: 2, name: 'blue candle', price: 10 },
      { id: 3, name: 'yellow candle', price: 10 },
      { id: 4, name: 'green candle', price: 12 },
      { id: 5, name: 'purple candle', price: 12 }
    ];
    return { products }
  }
}