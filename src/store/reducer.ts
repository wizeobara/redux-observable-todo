import { combineReducers } from 'redux';
import todosReducer, { ITodoState, initialTodoState } from './todo/reducers';

export interface IState {
  todo: ITodoState;
}

export const initialState: IState = {
  todo: initialTodoState
};

export default combineReducers({
  todo: todosReducer
});