export interface obj {
  rates: objWithMoney;
}
export interface objWithMoney {
  UAH: string,
  EUR: string,
  PLN: string,
  GBP: string,
  RUB: string,
}
export interface objToConverting {
  USD: number,
  EUR: number,
  PLN: number,
  GBP: number,
  UAH?: number,
  RUB: number,
  [key: string]: any;
}
