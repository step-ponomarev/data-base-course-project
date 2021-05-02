import {combineReducers} from 'redux'
import {selectionReducer} from './selection.reducer';
import {modalReducer} from './modal.reducer';
import {fieldsReducer} from './fields.reducer';

export const rootReducer = combineReducers({
    selectionReducer,
    fieldsReducer,
    modalReducer
});
export type RootState = ReturnType<typeof rootReducer>