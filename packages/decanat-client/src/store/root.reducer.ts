import {combineReducers} from 'redux'
import {selectionReducer} from './selection.reducer';
import {modalReducer} from './modal.reducer';
import {valuedFieldsReducer} from './valued.fields.reducer';

export const rootReducer = combineReducers({
    selectionReducer,
    valuedFieldsReducer: valuedFieldsReducer,
    modalReducer
});
export type RootState = ReturnType<typeof rootReducer>