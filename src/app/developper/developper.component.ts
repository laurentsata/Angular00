import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Developper } from '../models/developper.models';
import { Skill } from '../models/skill.models';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css'],
})
export class DevelopperComponent implements OnInit {
  dataChange: EventEmitter<string> = new EventEmitter();
  myskill: Skill[] = [
    {
      name: 'PC',
      logo: 'https://img.freepik.com/',
      site: 'https://www.clubic.com/',
    },
  ];
  name = this.myskill[0].name;
  logo = this.myskill[0].logo;
  site = this.myskill[0].site;
  developer: Developper[] = [
    {
      firstName: 'Dark',
      lastName: 'Vador',
      age: 50,
      gender: 'Male',
      bio: 'que la force soit avec toi',
      skills: this.myskill,
    },
    {
      firstName: 'Skywalker',
      lastName: 'Anakin',
      age: 50,
      gender: 'Male',
      bio: 'vive les barbecue',
      skills: this.myskill,
    },
    {
      firstName: 'Ahsoka',
      lastName: 'Tano',
      age: 20,
      gender: 'Female',
      bio: 'que la force soit avec toi',
      skills: this.myskill,
    },
  ];

  constructor() {}
  test = '';
  ngOnInit(): void {}
  onDataChange(event: string): void {
    console.log(event);
    this.test = event;
    // 'Chaîne de caractères envoyée au parent'
  }
}
