import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-application',
  templateUrl: './crud-application.component.html',
  styleUrls: ['./crud-application.component.css']
})
export class CrudApplicationComponent implements OnInit {
  
  userDetails: Array<any>;
  model: any = {};
  updatedValue: string | number;
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

  editUser(userList, a) {
    this.updatedValue = a;
    userList.isEditable = true;
  }

  updateUser(userList) {
    userList.isEditable = false;
  }

}
