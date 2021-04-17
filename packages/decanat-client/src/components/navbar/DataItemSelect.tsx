import {DataType} from '../../data/data-type';
import React, {FC} from 'react';
import {useAppSelector} from '../../store';
import {InputLabel, MenuItem, Select} from '@material-ui/core';

type Props = {
    items: Array<DataType>
}

export const DataItemSelect: FC<Props> = ({items}) => {
    const selectedItemDefault: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);
    const selectItems = items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>);

    return (
        <div>
            <InputLabel id="currentData">Данные</InputLabel>
            <Select labelId="currentData" id="dataItemSelect" defaultValue={selectedItemDefault}>
                {selectItems}
            </Select>
        </div>
    )
}