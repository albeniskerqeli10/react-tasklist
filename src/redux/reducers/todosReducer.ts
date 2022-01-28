import { TodosActionTypes, TodosState, TodosArray } from "../../types";
import {
  AddTodo,
  DeleteTodo,
  ShowAllTodos,
  ShowTodos,
  ShowProgressTodos,
  ShowCompletedTodos,
} from "../../types";
const initialTodos: TodosArray = [
  {
    id: 0,
    title: "First Todo",
    description: "First Todo Description",
    status: "In Progress",
    member: "John Doe",
  },
];

type Action =
  | AddTodo
  | DeleteTodo
  | ShowAllTodos
  | ShowTodos
  | ShowProgressTodos
  | ShowCompletedTodos;

const todosFromStorage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") || "")
  : initialTodos;

export function todosReducer(
  state: TodosState = {
    todos: todosFromStorage,
    filteredTodos: todosFromStorage,
  },
  action: Action
): TodosState {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        filteredTodos: [...state.todos, action.payload],
      };

    case TodosActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        filteredTodos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TodosActionTypes.SHOW_ALL:
      return { ...state, todos: state.filteredTodos };

    case TodosActionTypes.SHOW_TODO:
      return {
        ...state,
        todos:
          state.filteredTodos.filter((todo) => todo.status === "Todo").length >
          0
            ? state.filteredTodos.filter((todo) => todo.status === "Todo")
            : state.filteredTodos,
      };

    case TodosActionTypes.SHOW_PROGRESS:
      return {
        ...state,
        todos:
          state.filteredTodos.filter((todo) => todo.status === "In Progress")
            .length > 0
            ? state.filteredTodos.filter(
                (todo) => todo.status === "In Progress"
              )
            : state.filteredTodos,
      };

    case TodosActionTypes.SHOW_COMPLETED:
      return {
        ...state,
        todos:
          state.filteredTodos.filter((todo) => todo.status === "Completed")
            .length > 0
            ? state.filteredTodos.filter((todo) => todo.status === "Completed")
            : state.filteredTodos,
      };

    default:
      return state;
  }
}
