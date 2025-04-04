import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person = new Person('', '', 0, 0, 0);

  constructor() {}

  ngOnInit(): void {}
}
