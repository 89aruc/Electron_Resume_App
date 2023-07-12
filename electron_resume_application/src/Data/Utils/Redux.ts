import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from 'Data/Objects/State';

export type AsyncDispatch = ThunkDispatch<State, any, AnyAction>