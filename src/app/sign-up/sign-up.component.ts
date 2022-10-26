import { Component, OnInit } from '@angular/core';
// import { Order } from './sign-up.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Order = new Order("" , "", "");
  submitted:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // form submitted
    this.submitted = true;
    console.log(this.model);
  }
}
export class Order {
  constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
  ) {}
}