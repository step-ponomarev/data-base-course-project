import {combineReducers} from 'redux'
import {selectionReducer} from './selection.reducer';
import {modalReducer} from './modal.reducer';
import {valuedFieldsReducer} from './valued.fields.reducer';
import {tableReducer} from './table.reducer';

export const rootReducer = combineReducers({
    selectionReducer,
    valuedFieldsReducer,
    tableReducer,
    modalReducer
});
export type RootState = ReturnType<typeof rootReducer>