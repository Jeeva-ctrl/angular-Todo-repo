import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { ToDo } from '../../state/todo/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnDestroy, OnInit {
  @Output() toDoChange = new EventEmitter<Partial<ToDo>>();
  @Output() onAdd = new EventEmitter<void>();
  task: FormControl;

  private unSubscribe = new Subject<void>();

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  ngOnInit() {
    this.task = new FormControl();
    this.task.valueChanges
      .pipe(debounceTime(200), takeUntil(this.unSubscribe))
      .subscribe((value) => this.toDoChange.emit({ task: value }));
  }

  addToDo(){
    this.task.setValue('');
    this.onAdd.emit();
  }
}
