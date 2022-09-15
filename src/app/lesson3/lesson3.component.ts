import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss'],
})
export class Lesson3Component implements OnInit {
  public name!: string;
  public isEdit = false;
  public editName = '';
  public indexEdit!: number;
  public tasks: Array<any> = [
    {
      name: 'Java Script',
      checked: true,
      disabled: false,
      delBtnClass: 'deleteBtn',
    },
    {
      name: 'jQuery',
      checked: true,
      disabled: false,
      delBtnClass: 'deleteBtn',
    },
    {
      name: 'Angular',
      checked: false,
      disabled: true,
      delBtnClass: 'deleteBtn disabled',
    },
    {
      name: 'Bootstrap',
      checked: false,
      disabled: true,
      delBtnClass: 'deleteBtn disabled',
    },
    {
      name: 'HTML5',
      checked: false,
      disabled: true,
      delBtnClass: 'deleteBtn disabled',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    if (this.name) {
      let task = {
        name: this.name,
        checked: false,
        disabled: true,
        delBtnClass: 'deleteBtn disabled',
      };
      this.tasks.push(task);
      this.name = '';
    }
  }
  getStatus(indexCheckBox: number): void {
    if (!this.tasks[indexCheckBox].checked) {
      this.tasks[indexCheckBox].disabled = true;
      this.tasks[indexCheckBox].delBtnClass += ' disabled';
    } else {
      this.tasks[indexCheckBox].disabled = false;
      this.tasks[indexCheckBox].delBtnClass = 'deleteBtn';
    }
  }
  editTask(index: number): void {
    this.indexEdit = index;
    this.isEdit = true;
    this.editName = this.tasks[this.indexEdit].name;
  }
  saveName(): void {
    this.tasks[this.indexEdit].name = this.editName;
    this.editName = '';
    this.isEdit = false;
  }
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
