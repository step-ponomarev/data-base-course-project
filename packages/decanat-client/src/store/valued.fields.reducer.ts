import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ValuedField {
    name: string,
    value: string
}

interface FieldsState {
    formFields: string[],
    valuedFields: ValuedField[]
}

const initialState: FieldsState = {
    formFields: [],
    valuedFields: []
}

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setFormFields(state, action: PayloadAction<string[]>) {
            state.formFields = action.payload;
        },
        setValuedFields(state, action: PayloadAction<ValuedField[]>) {
            state.valuedFields = action.payload;
        },
    }
});

export const {setFormFields, setValuedFields} = fieldSlice.actions;
export const valuedFieldsReducer = fieldSlice.reducer;