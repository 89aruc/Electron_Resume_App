import { createAction } from '@reduxjs/toolkit';
import { Pages } from "Data/Objects/State";

export const SetActivePage = createAction<Pages>("SET_ACTIVE_PAGES");