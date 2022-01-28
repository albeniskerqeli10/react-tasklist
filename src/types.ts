export type Status = "Todo" | "In Progress" | "Completed";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: Status | string;
  member?: string;
}
export type UserState = {
  usersList: IUser[];
  loading?: boolean;
  error?: string;
};

export type TodosArray = Array<ITodo>;

export type TodosState = {
  todos: TodosArray;
  filteredTodos: TodosArray;
};

export enum TodosActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  SHOW_ALL = "SHOW_ALL",
  SHOW_TODO = "SHOW_TODO",
  SHOW_PROGRESS = "SHOW_PROGRESS",
  SHOW_COMPLETED = "SHOW_COMPLETED",
}

export interface AddTodo {
  type: TodosActionTypes.ADD_TODO;
  payload: ITodo;
}

export interface DeleteTodo {
  type: TodosActionTypes.DELETE_TODO;
  payload: number;
}

export interface IUser {
  id: number;
  name: string;
}

export type UsersArray = {
  usersList: IUser[];
  loading: boolean;
  error: string;
};
export enum UserActionTypes {
  FETCH_USERS_LOADING = "FETCH_USERS_LOADING",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUsersLoading {
  type: UserActionTypes.FETCH_USERS_LOADING;
  payload: boolean;
}

export interface FetchUsersSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface FetchUsersError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export interface ShowAllTodos {
  type: TodosActionTypes.SHOW_ALL;
  payload: TodosArray;
}
export interface ShowTodos {
  type: TodosActionTypes.SHOW_TODO;
  payload: TodosArray;
}
export interface ShowProgressTodos {
  type: TodosActionTypes.SHOW_PROGRESS;
  payload: TodosArray;
}
export interface ShowCompletedTodos {
  type: TodosActionTypes.SHOW_COMPLETED;
  payload: TodosArray;
}

export type DispatchUserTypes =
  | FetchUsersLoading
  | FetchUsersSuccess
  | FetchUsersError;
