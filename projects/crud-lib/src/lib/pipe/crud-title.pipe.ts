import { PipeTransform, Pipe } from '@angular/core';
import { GenderList } from '../crud-lib.model';
@Pipe({
  name: 'employeeNameTitle',
  pure: true
})
export class CrudTitlePipe implements PipeTransform {
  transform(name: string, gender: number): string {
    console.log('title pipe');
    if (gender === 1) {
      return "Mr. " + name;
    }
    else {
      return "Miss. " + name;
    }
  }
}
