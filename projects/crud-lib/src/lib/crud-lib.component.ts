import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-crud-lib',
  templateUrl: './crud-lib.component.html',
  styleUrls: ['./crud-lib.component.css']
})
export class CrudLibComponent implements OnInit {

  userDetails: Array<any>;
  model: any = {};
  useOldData: any;

  constructor() {
    this.userDetails = [
      { name: 'John Doe', gender: 'male', designation: 'Web Designer', organization: 'Design Infotech', salary: 250000, birthday: '12/21/1994' },
      { name: 'Tom Richer', gender: 'male', designation: 'Web Developer', organization: 'Developing Infotech', salary: 350000, birthday: '12/25/1995' },
      { name: 'Tim Southy', gender: 'male', designation: 'Manager', organization: 'Management Organization', salary: 450000, birthday: '9/26/1964' },
      { name: 'Mary Richard', gender: 'female', designation: 'Web Designer', organization: 'Design Infotech', salary: 350000, birthday: '1/2/1880' },
      { name: 'Jenny Joseph', gender: 'female', designation: 'Ux Designer', organization: 'Design Infotech', salary: 450000, birthday: '10/15/1990' },
      { name: 'Jackson Vandam', gender: 'male', designation: 'Web Developer', organization: 'Developing Infotech', salary: 275000, birthday: '12/25/1980' },
      { name: 'Micky John', gender: 'female', designation: 'Assist. Manager', organization: 'Management Organization', salary: 550000, birthday: '9/4/1974' }
    ]
  }

  ngOnInit() {
  }

  addUser() {
    this.userDetails.push(this.model);
    this.model = {};
  }

  deleteUser(userIndex) {
    if (userIndex >= 0) {
      this.userDetails.splice(userIndex, 1);
    }
  }

  editUser(userList, userIndex): void {
    this.useOldData = Object.assign({}, this.userDetails[userIndex]);
    userList.isEditable = true;
  }

  updateUser(userList): void {
    userList.isEditable = false;
  }

  cancelUser(userList, userIndex) {
    this.userDetails[userIndex] = this.useOldData;
    userList.isEditable = false;
  }

}
