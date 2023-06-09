import { ChangeDetectorRef, Component } from '@angular/core';
import { ConverterDataBaseService } from '../converter-data-base.service';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private base: ConverterDataBaseService, private cdr: ChangeDetectorRef) { }
  USD!: number;

  EUR!: number;
  invite!: Observable<obj>;
  dataBase: any = null;
  ngOnInit() {
    this.invite = this.base.getBase()
  }
  ngAfterViewInit() {
    this.invite.subscribe(data => {
      this.EUR = Number(data.rates.EUR);

      this.USD = Number(data.rates.UAH);
      this.dataBase = {
        USD: this.USD,
        EUR: this.USD / this.EUR,

      }
    })

    this.cdr.detectChanges()
  }
}
interface obj {
  rates: objWithMoney;
}
interface objWithMoney {
  UAH: string,
  EUR: string,

}
