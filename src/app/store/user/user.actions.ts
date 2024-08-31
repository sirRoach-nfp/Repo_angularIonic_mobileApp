
import { createAction,props } from "@ngrx/store";

export const setUsername = createAction(
    '[User] Set Username',
    props<{username: string}>()

)

export const clearUsername = createAction(`[User] Clear Username`);