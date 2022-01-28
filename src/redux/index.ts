import { combineReducers, createStore,applyMiddleware } from 'redux';
import { todosReducer } from './reducers/todosReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {TodosState, UserState} from '../types'
import thunk from "redux-thunk"
import { userReducer } from './reducers/userReducer';

export interface IRootState {
    todos: TodosState;
    users:UserState;
}
const middleware = [thunk];

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        todos: todosReducer,
        users:userReducer
}) ,composeWithDevTools(applyMiddleware(...middleware)));

export { store };
