import { combineReducers } from 'redux'
import {selectionReducer} from './selection.reducer';

export const rootReducer = combineReducers({
    selectionReducer
});
export type RootState = ReturnType<typeof rootReducer>