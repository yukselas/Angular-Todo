import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../shared/todo.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> =  new EventEmitter()

  @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
 //console.log(this.editBtnElRef.nativeElement)
 tippy(this.editBtnElRef.nativeElement, {
  content: 'Test Tooltip'
 })
  }

  onTodoClicked() {
  this.todoClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }
}
