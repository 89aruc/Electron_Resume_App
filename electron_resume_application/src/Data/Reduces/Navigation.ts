import { createReducer, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { NavigationState, Pages } from 'Data/Objects/State';
import { SetActivePage } from 'Data/Actions/Navigation';
import update from 'immutability-helper';

const defaultState: NavigationState = {
    currentPage: Pages.LOGIN
}

const handleSetActivePage = (state: NavigationState, action: PayloadAction<Pages>) => {
    if(action?.payload) {
        return state;
    }

    return update(state, {
        currentPage: {
            $set: action?.payload
        }
    });
}

const reducerBuilder = (builder: ActionReducerMapBuilder<NavigationState>) => {
    builder.addCase(SetActivePage.type, handleSetActivePage);
}

export default createReducer(defaultState, reducerBuilder);
