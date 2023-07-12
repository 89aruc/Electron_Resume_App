import { createSelector } from '@reduxjs/toolkit';
import { State, UserState } from "Data/Objects/State";

const getUserState = (state: State) => {
    return state?.User;
}

const getUser = (state: UserState) => {
    return state.currentUser;
}

const getUserToken = (state: UserState) => {
    return state?.token;
}

export const getAuthToken = createSelector(
    getUserState,
    getUserToken
)

export const getCurrentUser = createSelector(
    getUserState,
    getUser
)