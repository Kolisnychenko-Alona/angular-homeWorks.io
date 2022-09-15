import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() tasks!: Array<any>;
  @Output() isDone = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doneTask(index: number): void{
    this.isDone.emit(index);
  }

  editIndex(index: number): void {
    this.edit.emit(index);
  }
  deleteIndex(index: number): void {
    this.delete.emit(index);
  }

}
