import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todoEpics from './todo/epics';
import { IState } from './reducer';
import { Action } from 'redux';

export const rootEpic = combineEpics(todoEpics);

export default createEpicMiddleware<Action, Action, IState>();