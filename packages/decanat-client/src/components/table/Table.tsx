import React, {FC, useState} from 'react';
import style from './Table.module.css';
import {DataGrid, GridRowId, GridSelectionModelChangeParams} from '@material-ui/data-grid';
import {setSelectedIds} from '../../store/selection.reducer';
import {AppDispatch, useAppDispatch} from '../../store';

type Props = {
    columns: Array<Column>
    rows: Array<any>
}

export type Column = {
    field: string,
    headerName: string,
    width: number
}

export const Table: FC<Props> = ({columns, rows}) => {
    const [selectedIds, setIds] = useState<GridRowId[]>([]);
    const dispatch: AppDispatch = useAppDispatch();

    const onSelectedValues = (params: GridSelectionModelChangeParams) => {
        const ids: Array<number> = params.selectionModel.map(id => Number(id));
        dispatch(setSelectedIds(ids))

        setIds(params.selectionModel);
    }

    return (
        <div className={style.table}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection
                      onSelectionModelChange={onSelectedValues} columnBuffer={3}/>
        </div>
    );
};