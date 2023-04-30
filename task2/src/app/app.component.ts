import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersArray: any[] = [
    { name: 'nikhil1', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil2', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil3', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil4', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil5', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil6', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil7', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
    { name: 'nikhil8', dob: '19-05-1997', phone: '9145504548', gender: 'male' },
  ];
  upgradedArray: any[] = [
    {
      name: 'madhavi1',
      dob: '05/19/1997',
      phone: '9145504548',
      gender: 'female',
    },
    {
      name: 'madhavi2',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'female',
    },
    {
      name: 'madhavi3',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'female',
    },
    {
      name: 'madhavi4',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'female',
    },
    {
      name: 'madhavi5',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'female',
    },
  ];

  emitEditValue: any = {};

  getUpdatedArray(e: any) {
    this.usersArray = e;
  }

  getDetails(e: any) {
    this.usersArray.push(e);
  }

  editItem(e: any) {
    this.emitEditValue=e;
    console.log(this.emitEditValue)
  }

  getdownGradeitem(e: any) {
    this.upgradedArray = e;
  }
}
