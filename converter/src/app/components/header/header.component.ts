import { ChangeDetectorRef, Component } from '@angular/core';
import { ConverterDataBaseService } from '../../shared/converter-data-base.service';
import { Observable } from 'rxjs';
import { obj, objToConverting } from '../../Interfaces/myInterface.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private base: ConverterDataBaseService) { }
  USD!: number;
  EUR!: number;


  invite!: Observable<obj>;
  dataBase!: objToConverting;

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
        PLN: this.USD / Number(data.rates.PLN),
        GBP: this.USD / Number(data.rates.GBP),
        UAH: 1,
        RUB: this.USD / Number(data.rates.RUB),
      }
    })


  }
}

