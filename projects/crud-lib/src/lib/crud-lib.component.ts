import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeList, GenderList } from './crud-lib.model';

@Component({
  selector: 'lib-crud-lib',
  templateUrl: './crud-lib.component.html',
  styleUrls: ['./crud-lib.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudLibComponent implements OnInit {
  
  getSearchString: string;
  userDetails: EmployeeList[];
  filterUserDetails: EmployeeList[];
  genderArray: Array<GenderList>;
  model: any = {};
  useOldData: any;
  
  private _searchData: string;
  private counter: number = 0;
  
  constructor() {
    this.userDetails = new Array<EmployeeList>();
  }

  ngOnInit() {
    this.gender();
    this.generateUserDetails();
    this.filterUserDetails = this.userDetails;
  }

  //get getSearchData(): string {
  //  this.counter++;
  //  console.log(this.counter);
  //  return this._searchData;
  //}

  set searchData(value: string) {
    this._searchData = value;
    this.filterUserDetails = this.filterUser(value);
  }

  filterUser(searchString: string) {
    searchString = searchString.toLocaleLowerCase();
    return this.userDetails.filter(x => x.name.toLocaleLowerCase().indexOf(searchString) !== -1);
  }

  changeSearchData() {
    this.getSearchString = this._searchData;
  }

  changeDesignation() {
    //this.userDetails[0].designation = "web developer"; //Input value change (Pure Change)
    this.userDetails[0].name = "Jordan"; //Object Reference Not change only property change (Impure Change)

    /*Object Reference change and create copy of array (Two array with two different object reference - Pure Change)*/
    //const array2: EmployeeList[] = Object.assign([], this.userDetails);
    //array2[0].name = "Jordan";
    //this.userDetails = array2;
    this.filterUserDetails = this.filterUser(this._searchData);
  }

  mouseMoveFn() {

  }
  
  gender() {
    this.genderArray = [
      { value: 1, viewValue: 'Male' },
      { value: 2, viewValue: 'Female' }
    ];
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

  generateUserDetails() {
    this.userDetails = [
      { name: 'John Doe', gender: 1, designation: 'Web Designer', organization: 'Design Infotech', salary: 250000, birthday: '12/21/1994' },
      { name: 'Tom Richer', gender: 1, designation: 'Web Developer', organization: 'Developing Infotech', salary: 350000, birthday: '12/25/1995' },
      { name: 'Tim Southy', gender: 1, designation: 'Manager', organization: 'Management Organization', salary: 450000, birthday: '9/26/1964' },
      { name: 'Mary Richard', gender: 2, designation: 'Web Designer', organization: 'Design Infotech', salary: 350000, birthday: '1/2/1880' },
      { name: 'Jenny Joseph', gender: 2, designation: 'Ux Designer', organization: 'Design Infotech', salary: 450000, birthday: '10/15/1990' },
      { name: 'Jackson Vandam', gender: 1, designation: 'Web Developer', organization: 'Developing Infotech', salary: 275000, birthday: '12/25/1980' },
      { name: 'Micky John', gender: 2, designation: 'Assist. Manager', organization: 'Management Organization', salary: 550000, birthday: '9/4/1974' }
    ];
  }

}
