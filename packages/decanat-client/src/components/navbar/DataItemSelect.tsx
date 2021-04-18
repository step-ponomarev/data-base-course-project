import {DataType, getPresentDataType, PresentDataType} from '../../data/data-type';
import React, {BaseSyntheticEvent, FC, useState} from 'react';
import {AppDispatch, useAppDispatch, useAppSelector} from '../../store';
import {InputLabel, MenuItem, Select} from '@material-ui/core';
import {setSelectedDataType} from '../../store/selection.reducer';

type Props = {
    items: Array<DataType>
}

export const DataItemSelect: FC<Props> = ({items}) => {
    const dispatch: AppDispatch = useAppDispatch();
    const selectItems = items.map((item: DataType) => getPresentDataType(item)).map((item: PresentDataType) =>
        <MenuItem key={item.id + item.name} value={item.id}>{item.name}</MenuItem>);

    const [selectedItem, selectItem] = useState(1);

    const onChange = (event: BaseSyntheticEvent) => {
        if (!event.target.value) {
            return;
        }

        const value: DataType = event.target.value as DataType;
        dispatch(setSelectedDataType(value));

        selectItem(value);
    }

    return (
        <div>
            <InputLabel id="currentData">Данные</InputLabel>
            <Select labelId="currentData" id="dataItemSelect" value={selectedItem} onChange={onChange}>
                {selectItems}
            </Select>
        </div>
    )
}