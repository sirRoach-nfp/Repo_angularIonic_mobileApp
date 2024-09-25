

import { createReducer, on } from "@ngrx/store";
import { setUsername,clearUsername, logout } from "./user.actions";

export interface UserState{
    username: string | null;
    email: string | null;
}


export const initialState: UserState = {
    username: null,
    email: null,
}


export const userReducer = createReducer(
    initialState,
    on(setUsername,(state,{username}) => ({...state,username})),
    on(clearUsername, (state) => ({...state,username:null})),
    on(logout, state => ({
        ...state,
        username: null,
        email: null
      }))
)