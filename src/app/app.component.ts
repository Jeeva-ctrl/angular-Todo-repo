import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../state/state.interface';
import { completeToDos, incompleteToDos } from '../state/todo';
import {
  AddToDo,
  CompleteToDo,
  IncompleteToDo,
} from '../state/todo/todo.action';
import { generateTodos, ToDo } from '../state/todo/todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  completeTodos: Observable<Array<ToDo>>;
  incompleteTodos: Observable<Array<ToDo>>;

  private _todo: Partial<ToDo>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    generateTodos().forEach((todo) => this.store.dispatch(new AddToDo(todo)));
    this.completeTodos = this.store.pipe(select(completeToDos));
    this.incompleteTodos = this.store.pipe(select(incompleteToDos));
  }
  onCompleteToDo(toDo: ToDo) {
    this.store.dispatch(new CompleteToDo(toDo));
  }
  onAddToDoChange(toDo: Partial<ToDo>) {
    this._todo = toDo;
  }
  addToDo() {
    console.log("d")
    this.store.dispatch(
      new AddToDo({
        id: Math.random(),
        complete: false,
        task: this._todo.task,
      })
    );
  }
  onIncompleteToDo(toDo:ToDo){
    this.store.dispatch(new IncompleteToDo(toDo))

  }
}
