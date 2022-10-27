import { Component, EventEmitter, OnInit } from "@angular/core";
import { Output } from "@angular/core";

@Component({
  selector: "app-createOnomatopia",
  templateUrl: "./create-onomatopia.component.html",
  styleUrls: ["./create-onomatopia.component.css"]
})
export class CreateOnomatopiaComponent implements OnInit {
  constructor() {}

  newOnomatopia: string = "";

  @Output()
  onomatopia: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.onomatopia.emit(this.newOnomatopia);
  }

  ngOnInit(): void {}
}