import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ValuedField {
    name: string,
    value: string
}

interface FieldsState {
    valuedFields: ValuedField[]
}

const initialState: FieldsState = {
    valuedFields: []
}

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setValuedFields(state, action: PayloadAction<ValuedField[]>) {
            state.valuedFields = action.payload;
        },
    }
});

export const {setValuedFields} = fieldSlice.actions;
export const valuedFieldsReducer = fieldSlice.reducer;