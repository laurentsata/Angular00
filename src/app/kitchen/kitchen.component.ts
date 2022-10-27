import { Component, OnInit } from '@angular/core';
// import { Log } from '@angular/core/testing/src/logger';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;

  isCooked: boolean = false;

  constructor() {}

  ngOnInit() {}

  startCooking() {
    this.isCooked = true;
  }
}

