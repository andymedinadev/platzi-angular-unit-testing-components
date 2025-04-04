import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  person = new Person('', '', 0, 0, 0);

  constructor() {}

  ngOnInit(): void {}
}
