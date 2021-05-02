import React, {BaseSyntheticEvent, FC} from 'react';
import {DataItemSelect} from './DataItemSelect';
import {DataType} from '../../data/data-type';
import {Button} from '@material-ui/core';
import style from './Navbar.module.css';
import {useAppDispatch, useAppSelector} from '../../store';
import {RequestType, setRequestType, setModalOpen} from '../../store/modal.reducer';

type Props = {
    selectItems: Array<DataType>
}

export const Navbar: FC<Props> = ({selectItems}) => {
    const dispatch = useAppDispatch();
    const selectedValues: Array<string | number> = useAppSelector(state => state.selectionReducer.selectedIds);

    const onClickAdd = () => {
        dispatch(setRequestType(RequestType.ADD));
        dispatch(setModalOpen(true));
    }

    const onClickDelete = () => {
        dispatch(setRequestType(RequestType.DELETE));
        dispatch(setModalOpen(true));
    }

    const onClickEdit = () => {
        dispatch(setRequestType(RequestType.EDIT));
        dispatch(setModalOpen(true));
    }

    return (
        <div className={style.navbar}>
            <div className={style.select}>
                <DataItemSelect items={selectItems}/>
            </div>

            <Button color="inherit" onClick={onClickAdd}>
                Добавить
            </Button>

            <Button color="primary" disabled={selectedValues.length === 0}
                    onClick={onClickEdit}>
                Изменить
            </Button>

            <Button color="secondary" disabled={selectedValues.length === 0}
                    onClick={onClickDelete}>
                Удалить
            </Button>
        </div>
    )
}
