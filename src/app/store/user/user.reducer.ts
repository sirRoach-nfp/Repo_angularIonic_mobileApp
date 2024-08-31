

import { createReducer, on } from "@ngrx/store";
import { setUsername,clearUsername } from "./user.actions";

export interface UserState{
    username: string | null;
}


export const initialState: UserState = {
    username: null,
}


export const userReducer = createReducer(
    initialState,
    on(setUsername,(state,{username}) => ({...state,username})),
    on(clearUsername, (state) => ({...state,username:null}))
)