import { Component } from '@angular/core';

export interface tablevalue {
  value: string;
  isvisible?: boolean;
}

export interface user {
  name: tablevalue;
  age: tablevalue;
  edu: tablevalue;
  expand?: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public userdata: user[] = [
    {
      name: { value: 'Rehan' },
      age: { value: '28' },
      edu: { value: 'Maths' },
      expand: false,
    },
    {
      name: { value: 'Swami' },
      age: { value: '30' },
      edu: { value: 'Sciencee' },
      expand: false,
    },
    {
      name: { value: 'Sunil' },
      age: { value: '26' },
      edu: { value: 'History' },
      expand: false,
    },
  ];

  dataSource;
  displayedColumns = ['name', 'age', 'edu'];

  constructor() {
    this.dataSource = this.userdata;
  }
}
