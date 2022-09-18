import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss'],
})
export class Lesson4Component implements OnInit {
  public searchContact!: string;
  public addEdit = false;
  public indexEdit!: number;
  public saveAdd!: boolean;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public type = 'asc';
  public column = '';
  public ascFN = false;
  public descFN = false;
  public ascLN = false;
  public descLN = false;
  public ascPH = false;
  public descPH = false;
  public count = 1;
  public phoneBook: Contact[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuck',
      phone: '0671111111',
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      phone: '0671222222',
    },
    {
      firstName: 'Alejandro',
      lastName: 'De Ria Albrechet',
      phone: '0633333333',
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      phone: '0635555555',
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      phone: '0636666666',
    },
    {
      firstName: 'Sofiya',
      lastName: 'Zhuck',
      phone: '0977777777',
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  clearSearch(): void {
    this.searchContact = '';
  }
  addContact(): void {
    this.saveAdd = true;
    this.addEdit = true;
  }
  editContact(index: number): void {
    this.addEdit = true;
    this.saveAdd = false;
    this.indexEdit = index;
    this.firstName = this.phoneBook[index].firstName;
    this.lastName = this.phoneBook[index].lastName;
    this.phone = this.phoneBook[index].phone;
  }
  saveEditContact(): void {
    this.phoneBook[this.indexEdit].firstName = this.firstName;
    this.phoneBook[this.indexEdit].lastName = this.lastName;
    this.phoneBook[this.indexEdit].phone = this.phone;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.addEdit = false;
  }
  deleteContact(index: number): void {
    this.phoneBook.splice(index, 1);
  }
  close(): void {
    this.addEdit = false;
  }
  saveContact(): void {
    let newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
    };
    this.phoneBook.unshift(newContact);
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.addEdit = false;
  }
  sort(column: string): void {
    this.column = column;
    console.log(column);
    switch (this.count) {
      case 1:
        this.type = 'asc';
        if (column === 'fN') {
          this.ascFN = true;
          this.descFN = false;
          this.ascLN = false;
          this.descLN = false;
          this.ascPH = false;
          this.descPH = false;
        }
        if (column === 'lN') {
          this.ascFN = false;
          this.descFN = false;
          this.ascLN = true;
          this.descLN = false;
          this.ascPH = false;
          this.descPH = false;
        }
        if (column === 'phone') {
          this.ascFN = false;
          this.descFN = false;
          this.ascLN = false;
          this.descLN = false;
          this.ascPH = true;
          this.descPH = false;
        }
        this.count += 1;
        break;
      case 2:
        this.type = 'desk';

        if (column === 'fN') {
          this.ascFN = false;
          this.descFN = true;
          this.ascLN = false;
          this.descLN = false;
          this.ascPH = false;
          this.descPH = false;
        }
        if (column === 'lN') {
          this.ascFN = false;
          this.descFN = false;
          this.ascLN = false;
          this.descLN = true;
          this.ascPH = false;
          this.descPH = false;
        }
        if (column === 'phone') {
          this.ascFN = false;
          this.descFN = false;
          this.ascLN = false;
          this.descLN = false;
          this.ascPH = false;
          this.descPH = true;
        }
        this.count = 1;
        break;
    }
  }
}


export interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
}
