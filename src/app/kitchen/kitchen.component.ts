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

  cookiesCooked: number = 0;

  constructor() {}

  ngOnInit() {}

  startCooking(): void {
    this.isCooked = true;
  }

  onGetCookies(event: number): void {
    this.cookiesCooked =+ event;
  }
}