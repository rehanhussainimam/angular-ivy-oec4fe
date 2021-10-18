import { Component } from '@angular/core';

export interface user {
  name: string;
  age: string;
  edu: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public userdata: user[] = [
    {
      name: 'Rehan',
      age: '28',
      edu: 'Maths',
    },
    {
      name: 'Swami',
      age: '30',
      edu: 'Sciencee',
    },
    {
      name: 'Sunil',
      age: '26',
      edu: 'History',
    },
  ];

  dataSource;
  displayedColumns = ['name', 'age', 'edu'];

  constructor() {
    this.dataSource = this.userdata;
  }
}
