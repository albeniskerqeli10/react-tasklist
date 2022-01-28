
import {Dispatch} from 'redux';
import { DispatchUserTypes , UserActionTypes} from '../../types';

export const fetchUsers = () => async(dispatch:Dispatch<DispatchUserTypes>) => {
dispatch({
    type:UserActionTypes.FETCH_USERS_LOADING,
    payload:true
})
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await response.json();
    dispatch({
        type:UserActionTypes.FETCH_USERS_SUCCESS,
        payload:usersData
    })


 }
 catch(err:any) {
    dispatch({
        type:UserActionTypes.FETCH_USERS_ERROR,
        payload: err.message
    })
 }

}