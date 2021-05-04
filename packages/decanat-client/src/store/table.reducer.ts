import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Column} from '../components/table/Table';

interface TableState {
    columns: Array<Column>
    rows: Array<Object>
    needFetchData: boolean;
}

const initialState: TableState = {
    needFetchData: true,
    columns: [],
    rows: []
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setNeedFetchData(state, action: PayloadAction<boolean>) {
            state.needFetchData = action.payload;
        },
        setColumns(state, action: PayloadAction<Array<Column>>) {
            state.columns = action.payload;
        },
        setRows(state, action: PayloadAction<Array<Object>>) {
            state.rows = action.payload;
        }
    }
})

export const {setNeedFetchData, setColumns, setRows} = tableSlice.actions;
export const tableReducer = tableSlice.reducer;


