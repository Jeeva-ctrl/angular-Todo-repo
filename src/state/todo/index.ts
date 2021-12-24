import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ToDo } from './todo.model';
import { TodoState, toDoAdapter } from './todo.reducer';

export const selectToDoState = createFeatureSelector<TodoState>('todo');

export const {
  selectIds: toDoIds,
  selectEntities: toDoEntities,
  selectAll: allToDos,
  selectTotal: totalToDos,
} = toDoAdapter.getSelectors(selectToDoState);

export const completeToDos = createSelector(allToDos, (toDos: Array<ToDo>) => toDos.filter(toDo => toDo.complete));
export const incompleteToDos = createSelector(allToDos, (toDos: Array<ToDo>) => toDos.filter(toDo => !toDo.complete));