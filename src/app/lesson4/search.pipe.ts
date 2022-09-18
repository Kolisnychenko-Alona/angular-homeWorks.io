import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './lesson4.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Contact[], searchContact: string): Contact[] {
    if (!value) return [];
    if (!searchContact) return value;
    return value.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchContact.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchContact.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchContact.toLowerCase())
    );
  }
}
