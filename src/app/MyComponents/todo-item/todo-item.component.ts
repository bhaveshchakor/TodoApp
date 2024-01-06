import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo!:Todo;
@Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckBox:EventEmitter<Todo> = new EventEmitter();

onClickDelete(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("OnClickDelete has been triggered")
}

onCheckBoxClick(todo:Todo){
  console.log(todo);
  this.todoCheckBox.emit(todo);
}
}
