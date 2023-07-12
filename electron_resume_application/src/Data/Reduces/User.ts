import { createReducer, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserState } from "Data/Objects/State";
import { IApiUser } from 'Interfaces';
import { loginUserAsync } from 'Data/Actions/User';

const defaultState: UserState = {
    token: '',
    currentUser: undefined
}

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IApiUser>) => {
    if(!action.payload) {
        return state;
    }

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {user: { uuid, username, email }, token} = action?.payload;

    const newUser = { uuid, username, email }

    state.currentUser = newUser;
    state.token = token;
}

const reducerBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(loginUserAsync.fulfilled.type, handleLoginUserAsync);
}

export default createReducer(defaultState, reducerBuilder);