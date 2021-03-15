import { ITodoItem } from "../../models";

export enum TodosActionTypes {
  LOAD_TODOS = "todos/load",
  LOADING_TODOS = "todos/loading",
  LOADED_TODOS = "todos/loaded",
  LOADING_TODOS_FAILED = "todos/loading_failed",

  ADD_TODO = "todos/add",
  ADDING_TODO = "todos/adding",
  ADDED_TODOS = "todos/added",
  ADDING_TODOS_FAILED = "todos/adding_failed",

  COMPLETE_TODO = "todos/complete",
  COMPLETING_TODO = "todos/completing",
  COMPLETED_TODOS = "todos/completed",
  COMPLETING_TODOS_FAILED = "todos/completing_failed",

  DELETE_TODO = "todos/delete",
  DELETING_TODO = "todos/deleting",
  DELETED_TODOS = "todos/deleted",
  DELETING_TODOS_FAILED = "todos/deleting_failed",

  EDIT_TODO = "todos/edit",
  EDITING_TODO = "todos/editing",
  EDITED_TODOS = "todos/edited",
  EDITING_TODOS_FAILED = "todos/editing_failed",

  SELECT_TASK = "todos/select",
  SWITCH_MODAL = "modal/switch",
}

export function selectTodo(todo: ITodoItem): ISelectTodoAction {
  return {
    type: TodosActionTypes.SELECT_TASK,
    payload: {
      todo,
    },
  };
}

export function switchModal(isModalOpen: boolean): ISwitchModalAction {
  return {
    type: TodosActionTypes.SWITCH_MODAL,
    payload: {
      isModalOpen,
    },
  };
}

export function loadTodos(): ILoadTodosAction {
  return {
    type: TodosActionTypes.LOAD_TODOS,
  };
}

export function loadingTodos(): ILoadingTodosAction {
  return {
    type: TodosActionTypes.LOADING_TODOS,
  };
}

export function loadedTodos(todos: ITodoItem[]): ILoadedTodosAction {
  return {
    type: TodosActionTypes.LOADED_TODOS,
    payload: {
      todos,
    },
  };
}

export function loadingTodosFailed(): ILoadingTodosFailedAction {
  return {
    type: TodosActionTypes.LOADING_TODOS_FAILED,
  };
}

export function addTodo(title: string): IAddTodoAction {
  return {
    type: TodosActionTypes.ADD_TODO,
    payload: {
      title,
      completed: false,
    },
  };
}

export function addingTodo(): IAddingTodoAction {
  return {
    type: TodosActionTypes.ADDING_TODO,
  };
}

export function addedTodo(todo: ITodoItem): IAddedTodoAction {
  return {
    type: TodosActionTypes.ADDED_TODOS,
    payload: {
      todo,
    },
  };
}

export function addingTodoFailed(): IAddingTodoFailedAction {
  return {
    type: TodosActionTypes.ADDING_TODOS_FAILED,
  };
}

export function completeTodo(args: {
  _id: string;
  completed: boolean;
}): ICompleteTodoAction {
  return {
    type: TodosActionTypes.COMPLETE_TODO,
    payload: {
      args,
    },
  };
}

export function completingTodo(): ICompletingTodoAction {
  return {
    type: TodosActionTypes.COMPLETING_TODO,
  };
}

export function completedTodo(todo: ITodoItem): ICompletedTodoAction {
  return {
    type: TodosActionTypes.COMPLETED_TODOS,
    payload: {
      todo,
    },
  };
}

export function completingTodoFailed(): ICompletingTodoFailedAction {
  return {
    type: TodosActionTypes.COMPLETING_TODOS_FAILED,
  };
}

export function deleteTodo(_id: string): IDeleteTodoAction {
  return {
    type: TodosActionTypes.DELETE_TODO,
    payload: {
      _id,
    },
  };
}

export function deletingTodo(): IDeletingTodoAction {
  return {
    type: TodosActionTypes.DELETING_TODO,
  };
}

export function deletedTodo(todo: ITodoItem): IDeletedTodoAction {
  return {
    type: TodosActionTypes.DELETED_TODOS,
    payload: {
      todo,
    },
  };
}

export function deletingTodoFailed(): IDeletingTodoFailedAction {
  return {
    type: TodosActionTypes.DELETING_TODOS_FAILED,
  };
}

export function editTodo(args: {
  _id: string;
  title: string;
}): IEditTodoAction {
  return {
    type: TodosActionTypes.EDIT_TODO,
    payload: {
      args,
    },
  };
}

export function editingTodo(): IEditingTodoAction {
  return {
    type: TodosActionTypes.EDITING_TODO,
  };
}

export function editedTodo(todo: ITodoItem): IEditedTodoAction {
  return {
    type: TodosActionTypes.EDITED_TODOS,
    payload: {
      todo,
    },
  };
}

export function editingTodoFailed(): IEditingTodoFailedAction {
  return {
    type: TodosActionTypes.EDITING_TODOS_FAILED,
  };
}

export interface ISwitchModalAction {
  type: TodosActionTypes.SWITCH_MODAL;
  payload: {
    isModalOpen: boolean;
  };
}
export interface ILoadTodosAction {
  type: TodosActionTypes.LOAD_TODOS;
}

export interface ILoadingTodosAction {
  type: TodosActionTypes.LOADING_TODOS;
}

export interface ILoadedTodosAction {
  type: TodosActionTypes.LOADED_TODOS;
  payload: {
    todos: ITodoItem[];
  };
}

export interface ILoadingTodosFailedAction {
  type: TodosActionTypes.LOADING_TODOS_FAILED;
}

export interface IAddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: {
    title: string;
    completed: boolean;
  };
}

export interface IAddingTodoAction {
  type: TodosActionTypes.ADDING_TODO;
}

export interface IAddedTodoAction {
  type: TodosActionTypes.ADDED_TODOS;
  payload: {
    todo: ITodoItem;
  };
}

export interface IAddingTodoFailedAction {
  type: TodosActionTypes.ADDING_TODOS_FAILED;
}

export interface ICompleteTodoAction {
  type: TodosActionTypes.COMPLETE_TODO;
  payload: {
    args: any;
  };
}

export interface ICompletingTodoAction {
  type: TodosActionTypes.COMPLETING_TODO;
}

export interface ICompletedTodoAction {
  type: TodosActionTypes.COMPLETED_TODOS;
  payload: {
    todo: ITodoItem;
  };
}

export interface ICompletingTodoFailedAction {
  type: TodosActionTypes.COMPLETING_TODOS_FAILED;
}

export interface IDeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: {
    _id: string;
  };
}

export interface IDeletingTodoAction {
  type: TodosActionTypes.DELETING_TODO;
}

export interface IDeletedTodoAction {
  type: TodosActionTypes.DELETED_TODOS;
  payload: {
    todo: ITodoItem;
  };
}

export interface IDeletingTodoFailedAction {
  type: TodosActionTypes.DELETING_TODOS_FAILED;
}

export interface IEditTodoAction {
  type: TodosActionTypes.EDIT_TODO;
  payload: {
    args: any;
  };
}

export interface IEditingTodoAction {
  type: TodosActionTypes.EDITING_TODO;
}

export interface IEditedTodoAction {
  type: TodosActionTypes.EDITED_TODOS;
  payload: {
    todo: ITodoItem;
  };
}

export interface IEditingTodoFailedAction {
  type: TodosActionTypes.EDITING_TODOS_FAILED;
}

export interface ISelectTodoAction {
  type: TodosActionTypes.SELECT_TASK;
  payload: {
    todo: ITodoItem;
  };
}

export type TodosAction =
  | ISelectTodoAction
  | ILoadTodosAction
  | ILoadingTodosAction
  | ILoadedTodosAction
  | ILoadingTodosFailedAction
  | IAddTodoAction
  | IAddingTodoAction
  | IAddedTodoAction
  | IAddingTodoFailedAction
  | ICompleteTodoAction
  | ICompletingTodoAction
  | ICompletedTodoAction
  | ICompletingTodoFailedAction
  | IDeleteTodoAction
  | IDeletingTodoAction
  | IDeletedTodoAction
  | IDeletingTodoFailedAction
  | ISwitchModalAction
  | IEditTodoAction
  | IEditingTodoAction
  | IEditedTodoAction
  | IEditingTodoFailedAction;
