
import { createAction,props } from "@ngrx/store";

export const setUsername = createAction(
    '[User] Set Username',
    props<{username: string}>()

)

export const setEmail = createAction(
    '[User] Set email',
    props<{email: string}>()
)

export const logout = createAction(
    '[User] Logout'
)

export const clearUsername = createAction(`[User] Clear Username`);