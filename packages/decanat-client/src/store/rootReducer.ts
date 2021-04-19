import {combineReducers} from 'redux'
import {selectionReducer} from './selection.reducer';
import {modalReducer} from './modal.reducer';

export const rootReducer = combineReducers({
    selectionReducer,
    modalReducer
});
export type RootState = ReturnType<typeof rootReducer>