import produce from "immer";
import { ApiStatus, ITodoItem } from "../../models";
import { TodosAction, TodosActionTypes } from "./actions";
import { RootState } from "../store";

export const initialTodoState: ITodoState = {
  loadingStatus: ApiStatus.LOADING,
  addingStatus: ApiStatus.LOADED,
  todos: [],
  select: { _id: "", title: "", completed: false },
  isModalOpen: false,
  id: "",
};

export interface ITodoState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  todos: ITodoItem[];
  select: { _id: string; title: string; completed: boolean };
  isModalOpen: boolean;
  id: string;
}

export const getUser = (state: RootState): ITodoState["todos"] =>
  state.todo.todos;
export const getTaskData = (state: RootState): ITodoState["select"] =>
  state.todo.select;
export const selectIsModalOpen = (
  state: RootState
): ITodoState["isModalOpen"] => state.todo.isModalOpen;

export default function todosReducer(
  state: ITodoState = initialTodoState,
  action: TodosAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case TodosActionTypes.SELECT_TASK:
        draft.select = action.payload.todo;
        break;
      case TodosActionTypes.SWITCH_MODAL:
        draft.isModalOpen = action.payload.isModalOpen;
        break;

      case TodosActionTypes.LOAD_TODOS:
      case TodosActionTypes.LOADING_TODOS:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case TodosActionTypes.LOADING_TODOS_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case TodosActionTypes.LOADED_TODOS:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.todos = action.payload.todos;
        break;

      case TodosActionTypes.ADD_TODO:
      case TodosActionTypes.ADDING_TODO:
        draft.addingStatus = ApiStatus.LOADING;
        break;

      case TodosActionTypes.ADDING_TODOS_FAILED:
        draft.addingStatus = ApiStatus.FAILED;
        break;

      case TodosActionTypes.ADDED_TODOS:
        console.log(action.payload);
        break;

      case TodosActionTypes.COMPLETE_TODO:
      case TodosActionTypes.COMPLETING_TODO:
        draft.addingStatus = ApiStatus.LOADING;
        break;

      case TodosActionTypes.COMPLETING_TODOS_FAILED:
        draft.addingStatus = ApiStatus.FAILED;
        break;

      case TodosActionTypes.COMPLETED_TODOS:
        console.log(action.payload);
        break;

      case TodosActionTypes.DELETE_TODO:
      case TodosActionTypes.DELETING_TODO:
        draft.addingStatus = ApiStatus.LOADING;
        break;

      case TodosActionTypes.DELETING_TODOS_FAILED:
        draft.addingStatus = ApiStatus.FAILED;
        break;

      case TodosActionTypes.DELETED_TODOS:
        console.log(action.payload);
        break;

      case TodosActionTypes.EDIT_TODO:
      case TodosActionTypes.EDITING_TODO:
        draft.addingStatus = ApiStatus.LOADING;
        break;

      case TodosActionTypes.EDITING_TODOS_FAILED:
        draft.addingStatus = ApiStatus.FAILED;
        break;

      case TodosActionTypes.EDITED_TODOS:
        console.log(action.payload);
        break;
    }
  });
}
