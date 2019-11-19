import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeList } from '../crud-lib.model';

@Pipe({
  name: 'employeeSearchFilter',
  pure: true
})

export class CrudSeachFilterPipe implements PipeTransform {

  transform(userDetails: EmployeeList[], searchData: string): EmployeeList[] {
    console.log('search pipe');
    if (!userDetails || !searchData) {
      return userDetails;
    }
   
    return userDetails.filter(x => x.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1);
  }
}
