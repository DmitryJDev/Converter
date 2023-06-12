import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { objToConverting } from '../../Interfaces/myInterface.interface';
import { ConverterService } from '../../shared/converter.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  baseForm!: FormGroup;
  firstInput!: FormControl;
  firstOption!: FormControl;
  secondInput!: FormControl;
  secondOption!: FormControl;
  constructor(
    private converter: ConverterService,
    private fb: FormBuilder,) { }

  @Input('dataBase') dataBase!: objToConverting;

  ngOnInit() {
    this.converter.base = this.dataBase;
    this.setControls();
    this.setForm();
  }

  setControls() {
    this.firstInput = this.fb.control('');
    this.secondInput = this.fb.control('');
    this.firstOption = this.fb.control('UAH');
    this.secondOption = this.fb.control('USD');
  }
  setForm() {
    this.baseForm = this.fb.group({
      firstInput: this.firstInput,
      secondInput: this.secondInput,
      firstOption: this.firstOption,
      secondOption: this.secondOption,
    })
  }

  showTwo() {
    this.firstInput.setValue(this.converter.converterSecondInput(this.secondInput.value, this.firstOption.value, this.secondOption.value));
  }

  showOne() {
    this.secondInput.setValue(this.converter.convertetFirstInput(this.firstInput.value, this.firstOption.value, this.secondOption.value));
  }

  getObjectKeys(obj: objToConverting): string[] {
    return Object.keys(obj);
  }
}
