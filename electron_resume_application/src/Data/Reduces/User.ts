import { createReducer, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserState } from "Data/Objects/State";
import { IApiUser } from 'Interfaces';
import { loginUserAsync } from 'Data/Actions/User';
import update from 'immutability-helper';

const defaultState: UserState = {
    token: '',
    currentUser: undefined
}

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IApiUser>) => {
    if(action?.payload) {
        return state;
    }

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {user, token} = action?.payload;

    return update(state, {
        currentUser: {
            $set: user
        },
        token: {
            $set: token
        }
    })
}

const reducerBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(loginUserAsync.fulfilled, handleLoginUserAsync);
}

export default createReducer(defaultState, reducerBuilder);