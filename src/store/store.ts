import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { initialState } from './reducer';
import epicMiddleware, { rootEpic } from './epic';

const composeEnhancer = composeWithDevTools({
  name: 'Redux Observable Todo List'
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
epicMiddleware.run(rootEpic);

export default store;