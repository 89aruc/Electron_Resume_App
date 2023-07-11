import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "Interfaces";
import * as UserAPI from 'Data/API/User';
import { State } from "Data/Objects/State";
import { getAuthToken } from "../Selectors/User";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, {state: State}>(
    "LOGIN_USER",
    async (payload: ILoginUserPayload, { getState }) => {
        return UserAPI.loginUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
    }
);

export const registerUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, {state: State}>(
    "REGISTER_USER",
    async (payload: IRegisterUserPayload, { getState }) => {
        return UserAPI.registerUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
    }
);