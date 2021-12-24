import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { ToDoActionTypes, ToDoActions } from './todo.action';
import { ToDo } from './todo.model';

export interface TodoState extends EntityState<ToDo> {}

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

export const initialSiteState: TodoState = toDoAdapter.getInitialState();

export function toDoReducer(
  state: TodoState = initialSiteState,
  action: ToDoActions
) {
  switch (action.type) {
    case ToDoActionTypes.AddToDo:
      return toDoAdapter.addOne(action.payload, state);

    case ToDoActionTypes.ClearToDos:
      return toDoAdapter.removeAll(state);

    case ToDoActionTypes.CompleteToDo:
      console.log('called ToDoActionTypes.CompleteToDo', action);
      return toDoAdapter.updateOne(
        {
          id: action.payload.id,
          changes: {
            ...action.payload,
            complete: true,
          },
        },
        state
      );
    case ToDoActionTypes.IncompleteToDo:
      return toDoAdapter.updateOne(
        {
          id: action.payload.id,
          changes: {
            ...action.payload,
            complete: false,
          },
        },
        state
      );

    case ToDoActionTypes.RemoveToDo:
      return toDoAdapter.removeOne(action.payload.id, state);
    default: {
      return state;
    }
  }
}
