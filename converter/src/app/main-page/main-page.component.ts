import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  USD!: number;
  EUR!: number;

  one!: string;
  two!: string;
  constructor(private cdr: ChangeDetectorRef) { }
  @Input('dataBase') dataBase: any;


  ngOnInit() {
    this.USD = this.dataBase.USD.toFixed(2);
    this.EUR = this.dataBase.EUR.toFixed(2);
  }
  ngAfterViewInit() {
    this.cdr.detectChanges()
  }

  showTwo(inp2: any, sel1: any, sel2: any) {

    if (sel1.value == 'UAH' && sel2.value == 'USD') {
      this.one = (this.USD * inp2).toFixed(2);
    }
    else if (sel1.value == 'UAH' && sel2.value == 'EUR') {
      this.one = (this.EUR * inp2).toFixed(2);
    }
    else if (sel1.value == 'USD' && sel2.value == 'UAH') {
      this.one = (inp2 / this.USD).toFixed(2);
    }
    else if (sel1.value == 'USD' && sel2.value == 'EUR') {
      this.one = (inp2 / (this.USD / this.EUR)).toFixed(2);
    }
    else if (sel1.value == 'EUR' && sel2.value == 'UAH') {
      this.one = (inp2 / this.EUR).toFixed(2);
    }
    else if (sel1.value == 'EUR' && sel2.value == 'USD') {
      this.one = (inp2 / (this.EUR / this.USD)).toFixed(2);
    } else {
      this.one = inp2;
    }
  }

  showOne(inp1: any, sel1: any, sel2: any) {

    if (sel1.value == 'UAH' && sel2.value == 'USD') {
      this.two = (inp1 / this.USD).toFixed(2);
    }
    else if (sel1.value == 'UAH' && sel2.value == 'EUR') {
      this.two = (inp1 / this.EUR).toFixed(2);
    }
    else if (sel1.value == 'USD' && sel2.value == 'UAH') {
      this.two = (this.USD * inp1).toFixed(2);
    }
    else if (sel1.value == 'USD' && sel2.value == 'EUR') {
      this.two = ((this.USD / this.EUR) * inp1).toFixed(2);
    }
    else if (sel1.value == 'EUR' && sel2.value == 'UAH') {
      this.two = (this.EUR * inp1).toFixed(2);
    }
    else if (sel1.value == 'EUR' && sel2.value == 'USD') {
      this.two = ((this.EUR / this.USD) * inp1).toFixed(2);
    } else {
      this.two = inp1;
    }
  }
}
