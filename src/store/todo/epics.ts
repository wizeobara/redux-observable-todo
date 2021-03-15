import { combineEpics, Epic } from "redux-observable";
import {
  tap,
  switchMap,
  map,
  startWith,
  catchError,
  filter,
  mergeMap,
} from "rxjs/operators";
import axios from "axios";
import store from "../store";
import { loadTodos } from "./actions";
import {
  TodosAction,
  TodosActionTypes,
  loadedTodos,
  loadingTodos,
  loadingTodosFailed,
  addedTodo,
  addingTodo,
  addingTodoFailed,
  deletedTodo,
  deletingTodo,
  deletingTodoFailed,
  completedTodo,
  completingTodo,
  completingTodoFailed,
  editedTodo,
  editingTodo,
  editingTodoFailed,
} from "./actions";
import { IState } from "../reducer";
import { from, of } from "rxjs";
import { isOfType } from "typesafe-actions";
import { API_URL } from "../../api/api";

const loadTodosEpic: Epic<TodosAction, TodosAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.LOAD_TODOS)),
    switchMap(() =>
      from(axios.get(API_URL)).pipe(
        map((response) => loadedTodos(response.data)),
        startWith(loadingTodos()),
        catchError(() => of(loadingTodosFailed()))
      )
    )
  );

const addTodoEpic: Epic<TodosAction, TodosAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.ADD_TODO)),
    mergeMap((action) =>
      from(axios.post(API_URL, action.payload)).pipe(
        map((response) => addedTodo(response.data)),
        startWith(addingTodo()),
        catchError(() => of(addingTodoFailed()))
      )
    ),
    tap(() => store.dispatch(loadTodos()))
  );

const deleteTodoEpic: Epic<TodosAction, TodosAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.DELETE_TODO)),
    mergeMap((action) =>
      from(axios.delete(`${API_URL}${action.payload._id}`)).pipe(
        map((response) => deletedTodo(response.data)),
        startWith(deletingTodo()),
        catchError(() => of(deletingTodoFailed()))
      )
    ),
    tap(() => store.dispatch(loadTodos()))
  );

const completeTodoEpic: Epic<TodosAction, TodosAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.COMPLETE_TODO)),
    mergeMap((action) =>
      from(
        axios.post(`${API_URL}${action.payload.args._id}`, {
          completed: action.payload.args.completed,
        })
      ).pipe(
        map((response) => completedTodo(response.data)),
        startWith(completingTodo()),
        catchError(() => of(completingTodoFailed()))
      )
    ),
    tap(() => store.dispatch(loadTodos()))
  );

const editTodoEpic: Epic<TodosAction, TodosAction, IState> = (action$) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.EDIT_TODO)),
    mergeMap((action) =>
      from(
        axios.post(`${API_URL}${action.payload.args._id}`, {
          title: action.payload.args.title,
        })
      ).pipe(
        map((response) => editedTodo(response.data)),
        startWith(editingTodo()),
        catchError(() => of(editingTodoFailed()))
      )
    ),
    tap(() => store.dispatch(loadTodos()))
  );

export default combineEpics(
  loadTodosEpic,
  addTodoEpic,
  deleteTodoEpic,
  completeTodoEpic,
  editTodoEpic
);
