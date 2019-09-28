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
      { name: 'John Doe', designation: 'Web Designer', organization: 'XYZ' },
      { name: 'Tom Richer', designation: 'Web Developer', organization: 'zzz' },
      { name: 'Tim Southy', designation: 'Manager', organization: 'ABC' }
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
