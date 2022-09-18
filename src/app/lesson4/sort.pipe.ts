import { ComponentFactory, Pipe, PipeTransform } from '@angular/core';
import { Contact } from './lesson4.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Contact[], sort: string, column: string): Contact[] {
    if (!value) return [];
    if (!sort) return value;
    if (!column) return value;
    if (column === 'fN') {
      if (sort === 'asc') {
        return value.sort((a, b) =>
          a.firstName.toLowerCase() > b.firstName.toLowerCase()
            ? 1
            : a.firstName.toLowerCase() < b.firstName.toLowerCase()
            ? -1
            : 0
        );
      }
      if (sort === 'desk') {
        return value.sort((a, b) =>
          a.firstName.toLowerCase() < b.firstName.toLowerCase()
            ? 1
            : a.firstName.toLowerCase() > b.firstName.toLowerCase()
            ? -1
            : 0
        );
      }
    }
    if (column === 'lN') {
      if (sort === 'asc') {
        return value.sort((a, b) =>
          a.lastName.toLowerCase() > b.lastName.toLowerCase()
            ? 1
            : a.lastName.toLowerCase() < b.lastName.toLowerCase()
            ? -1
            : 0
        );
      }
      if (sort === 'desk') {
        return value.sort((a, b) =>
          a.lastName.toLowerCase() < b.lastName.toLowerCase()
            ? 1
            : a.lastName.toLowerCase() > b.lastName.toLowerCase()
            ? -1
            : 0
        );
      }
    }
    if (sort === 'asc') {
      return value.sort((a, b) =>
        a.phone.toLowerCase() > b.phone.toLowerCase()
          ? 1
          : a.phone.toLowerCase() < b.phone.toLowerCase()
          ? -1
          : 0
      );
    }
    
    return value.sort((a, b) =>
      a.phone.toLowerCase() < b.phone.toLowerCase()
        ? 1
        : a.phone.toLowerCase() > b.phone.toLowerCase()
        ? -1
        : 0
    );
  }

}
