import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent implements OnInit {

// On initialise notre propriété avec une valeur par défaut
// On décore notre propriété avec @Input()

@Input()
startCooking: boolean = false;

@Input()
numberOfCookies: number = 0;

@Input()
flour: number = 0;

@Input()
salt: number = 0;

@Input()
sugar: number = 0;

@Input()
egg: number = 0;

@Output()
cookies: EventEmitter<number> = new EventEmitter(); 
constructor() { }

ngOnInit(): void {
}

sendCookies() {
  this.cookies.emit(this.numberOfCookies);
}

}