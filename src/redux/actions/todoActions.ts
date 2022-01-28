import { ITodo , TodosActionTypes } from "../../types";
import { Dispatch } from 'redux';
import { IRootState } from './../index';

export const addTodo = (todo:ITodo)  => (dispatch:Dispatch , getState:() => IRootState) => {
       dispatch({
              type: TodosActionTypes.ADD_TODO,
              payload:{
                  id:todo.id,
                  title:todo.title,
              description:todo.description,
              status:todo.status,
              member:todo.member
                   
              }
               });
        localStorage.setItem('todos', JSON.stringify(getState().todos.todos));
}

 export const deleteTodo = (id:number) => (dispatch:Dispatch , getState:() => IRootState) => {

       dispatch({
              type: TodosActionTypes.DELETE_TODO,
              payload:id
       })
       localStorage.setItem('todos', JSON.stringify(getState().todos.todos));
 }



 export const showAllTodos = () => ({
        type: TodosActionTypes.SHOW_ALL,
 })

 export const showTodos = () => ({
        type: TodosActionTypes.SHOW_TODO,
 })

 export const showProgressTodos = () => ({
        type: TodosActionTypes.SHOW_PROGRESS,
 })

 export const showCompletedTodos = () =>({
        type: TodosActionTypes.SHOW_COMPLETED,
 })