import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataType} from '../data/data-type';

interface SelectionState {
    selectedIds: Array<number>
    selectedDataType: DataType
}

const initialState: SelectionState = {
    selectedIds: [],
    selectedDataType: DataType.STUDENT
}

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setSelectedIds(state, action: PayloadAction<Array<number>>) {
            state.selectedIds = action.payload;
        },
        setSelectedDataType(state, action: PayloadAction<DataType>) {
            state.selectedDataType = action.payload;
        }
    }
})

export const {setSelectedIds, setSelectedDataType} = selectionSlice.actions;
export const selectionReducer = selectionSlice.reducer;


