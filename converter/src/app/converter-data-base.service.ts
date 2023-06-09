import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterDataBaseService {

  constructor(private http: HttpClient) { }




  getBase() {
    return this.http.get<obj>('https://openexchangerates.org/api/latest.json?app_id=6fa3a6fbd1664c0a96d574cd81f88ce6')

  }



}
interface obj {
  rates: objWithMoney;
}
interface objWithMoney {
  UAH: string,
  EUR: string,
  PLN: string
}
