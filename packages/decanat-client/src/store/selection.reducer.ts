import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SelectionState {
    selectedIds: Array<string | number>
}

const initialState: SelectionState = {
    selectedIds: []
}

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setSelectedIds(state, action: PayloadAction<Array<number>>) {
            state.selectedIds = action.payload
        }
    }
})

export const {setSelectedIds} = selectionSlice.actions
export const selectionReducer = selectionSlice.reducer


