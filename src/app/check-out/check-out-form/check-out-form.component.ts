import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../core/helpers/error-state-matcher';

@Component({
  selector: 'check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss']
})

export class CheckOutFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  orderForm: FormGroup;

  @Output()
  onSubmitForm: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      line1: ['', [Validators.required]],
      line2: [''],
      city: ['', [Validators.required]]
    });
  }

  sendForm() {
    this.onSubmitForm.emit(this.orderForm.value);
  }

  get name() {
    return this.orderForm.get('name');
  }

  get line1() {
    return this.orderForm.get('line1');
  }

  get city() {
    return this.orderForm.get('city');
  }
}
