import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component {
  userDetails: any = {
    name: '',
    dob: '',
    phone: '',
    gender: '',
  };

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
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'male',
    },
    {
      name: 'madhavi2',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'male',
    },
    {
      name: 'madhavi3',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'male',
    },
    {
      name: 'madhavi4',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'male',
    },
    {
      name: 'madhavi5',
      dob: '19-05-1997',
      phone: '9145504548',
      gender: 'male',
    },
  ];

  submitClick(e: any) {
    e.preventDefault();
    this.usersArray.push(this.userDetails);
    console.log(this.usersArray);
    this.userDetails = {
      name: '',
      dob: '',
      phone: '',
      gender: '',
    };
  }
  editClick(e: any) {
    let editItem = this.usersArray.splice(e, 1);
    this.userDetails = editItem[0];
  }

  deleteClick(e: any) {
    this.usersArray.splice(e, 1);
  }

  upgradeClick(e: any) {
    let upgardedItem = this.usersArray.splice(e, 1);

    this.upgradedArray.push(upgardedItem[0]);
  }

  editClickUp(e: any) {
    let editItem = this.upgradedArray.splice(e, 1);
    this.userDetails = editItem[0];
  }

  deleteClickUp(e: any) {
    this.upgradedArray.splice(e, 1);
  }

  downgrade(e: any) {
    let upgardedItem = this.upgradedArray.splice(e, 1);
    this.usersArray.push(upgardedItem[0]);
  }
}
