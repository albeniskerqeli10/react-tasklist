import {
  UserActionTypes,
  FetchUsersLoading,
  FetchUsersSuccess,
  FetchUsersError,
  UserState,
} from "./../../types";

type UsersAction = FetchUsersLoading | FetchUsersSuccess | FetchUsersError;
export const userReducer = (
  state: UserState = { usersList: [] },
  action: UsersAction
) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_LOADING:
      return { ...state, loading: action.payload };

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, usersList: action.payload, loading: false };

    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
