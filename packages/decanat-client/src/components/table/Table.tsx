import React, {FC} from 'react';
import style from './Table.module.css';
import {DataGrid, GridSelectionModelChangeParams} from '@material-ui/data-grid';
import {setSelectedIds} from '../../store/selection.reducer';
import {AppDispatch, useAppDispatch, useAppSelector} from '../../store';

type Props = {
    pageSize: number
    columns: Array<Column>
    rows: Array<any>
}

export type Column = {
    field: string,
    headerName: string,
    width: number
}

export const Table: FC<Props> = ({columns, rows, pageSize}) => {
    const dispatch: AppDispatch = useAppDispatch();

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