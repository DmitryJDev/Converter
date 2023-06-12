import { Injectable } from '@angular/core';
import { objToConverting } from '../Interfaces/myInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  base!: objToConverting;

  converterSecondInput(inp2: string, sel1: string, sel2: string) {
    if (sel1 == 'UAH' && sel2 != 'UAH') {
      return (this.showValue(sel2) * Number(inp2)).toFixed(2);
    }
    else if (sel1 != 'UAH') {
      return (sel2 == 'UAH') ? (Number(inp2) / this.showValue(sel1)).toFixed(2) :
        (Number(inp2) / (this.showValue(sel1) / this.showValue(sel2))).toFixed(2)
    } else {
      return Number(inp2).toFixed(2);
    }
  }

  convertetFirstInput(inp1: string, sel1: string, sel2: string) {
    if (sel1 == 'UAH' && sel2 != 'UAH') {
      return (Number(inp1) / this.showValue(sel2)).toFixed(2);
    }
    else if (sel1 != 'UAH') {
      return (sel2 == 'UAH') ? (this.showValue(sel1) * Number(inp1)).toFixed(2) :
        ((this.showValue(sel1) / this.showValue(sel2)) * Number(inp1)).toFixed(2)
    } else {
      return Number(inp1).toFixed(2);
    }
  }


  showValue(sel: string) {
    let tempValue!: number;
    for (let key in this.base) {
      if (sel == key && this.base.hasOwnProperty(key)) {
        tempValue = this.base[key];
      }
    }
    return tempValue
  }
}
