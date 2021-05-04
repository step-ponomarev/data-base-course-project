import React, {FC} from 'react';
import style from './Table.module.css';
import {DataGrid, GridSelectionModelChangeParams} from '@material-ui/data-grid';
import {setSelectedIds} from '../../store/selection.reducer';
import {AppDispatch, useAppDispatch, useAppSelector} from '../../store';
import {DataType} from '../../data/data-type';

type Props = {
    pageSize: number
}

export type Column = {
    field: string,
    headerName: string,
    width: number
}

export const Table: FC<Props> = ({pageSize}) => {
    const dispatch: AppDispatch = useAppDispatch();
    const columns = useAppSelector(state => state.tableReducer.columns);
    const rows = useAppSelector(state => state.tableReducer.rows);

    const onSelectItem = (params: GridSelectionModelChangeParams) => {
        const ids: Array<number> = params.selectionModel.map(id => Number(id));
        dispatch(setSelectedIds(ids));
    }

    return (
        <div className={style.table}>
            <DataGrid rows={rows} columns={columns} pageSize={pageSize}
                      onSelectionModelChange={onSelectItem} hideFooterSelectedRowCount checkboxSelection/>
        </div>
    );
};