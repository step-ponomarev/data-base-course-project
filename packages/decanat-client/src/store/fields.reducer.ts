import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Field {
    name: string,
    value: string
}

interface FieldsSet {
    fields: Field[]
}

const initialState: FieldsSet = {
    fields: []
}

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setFields(state, action: PayloadAction<Field[]>) {
            state.fields = action.payload;
        },
    }
});

export const {setFields} = fieldSlice.actions;
export const fieldsReducer = fieldSlice.reducer;